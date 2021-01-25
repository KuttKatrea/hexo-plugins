"use strict";

const diagram = require("./diagram");
const parseTagArguments = require("hexo-util-parse-tag-arguments");
const fs = require("fs-extra");
const path = require("path");

function buildTagFromBuffer(contentBuffer, options) {
  switch (options.format) {
    case "svg":
      return contentBuffer.toString("UTF-8");
    case "png":
      const base64Content = contentBuffer.toString("base64");
      return `<img alt="${options.alt}" src="data:image/png;base64,${base64Content}" />`;
    default:
      throw new Error("No se reconoce el formato " + options.format);
  }
}

async function generateTagFromSource(sourcePath, source, options) {
  const plantumlOptions = Object.assign({}, options);

  plantumlOptions.include = [...plantumlOptions.include, sourcePath];

  const svgContentBuffer = await diagram.generate(source, plantumlOptions);

  const tag = buildTagFromBuffer(svgContentBuffer, plantumlOptions);

  return `
      <div class="plantuml-container">
        ${tag}
      </div>`;
}

function plantumlTagFactory(config) {
  return async function plantumlTag(args, content) {
    const parsedArgs = parseTagArguments({
      sourceArguments: args,
      defaultArguments: config,
    });

    const context = this;

    return await generateTagFromSource(
      path.dirname(context.full_source),
      content,
      parsedArgs
    );
  };
}

function plantumlFromFileTagFactory(config) {
  return async function plantumlFromFileTag(args) {
    const parsedArgs = parseTagArguments({
      sourceArguments: args,
      defaultKey: "file",
      defaultArguments: config,
    });

    const iumlPath = parsedArgs.file;

    const context = this;

    if (!iumlPath) {
      throw new Error(
        `No file specified for tag {% plantuml_from_file %} on file ${context.source}`
      );
    }

    const iumlFullpath = path.resolve(
      path.dirname(context.full_source),
      iumlPath
    );

    const exists = await fs.pathExists(iumlFullpath);

    if (!exists) {
      throw new Error(
        `The path ${iumlFullpath} specified for tag {% plantuml_from_file %} on file ${context.source} does not exists`
      );
    }

    const iumlContentBuffer = await fs.readFile(iumlFullpath);

    return await generateTagFromSource(
      path.dirname(iumlFullpath),
      iumlContentBuffer.toString("utf-8"),
      parsedArgs
    );
  };
}

exports.plantumlFromFileTag = plantumlFromFileTagFactory;
exports.plantumlTag = plantumlTagFactory;
