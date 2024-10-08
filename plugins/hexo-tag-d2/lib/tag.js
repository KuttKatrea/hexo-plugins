"use strict";

const diagram = require("./diagram");
const parseTagArguments = require("hexo-util-parse-tag-arguments");
const fs = require("fs-extra");
const path = require("path");

async function generateTagFromSource(sourcePath, source, options) {
  const d2Options = Object.assign({}, options);

  const contentBuffer = await diagram.generate(source, sourcePath, d2Options);

  const tag = contentBuffer.toString("utf-8");

  return `<div class="d2-container">${tag}</div>`;
}

function d2TagFactory(config) {
  return async function d2Tag(args, content) {
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

function d2FileTagFactory(config) {
  return async function d2FromFileTag(args) {
    const parsedArgs = parseTagArguments({
      sourceArguments: args,
      defaultKey: "file",
      defaultArguments: config,
    });

    const d2Path = parsedArgs.file;

    const context = this;

    if (!d2Path) {
      throw new Error(
        `No file specified for tag {% d2_from_file %} on file ${context.source}`
      );
    }

    const d2Fullpath = path.resolve(
      path.dirname(context.full_source),
      d2Path
    );

    const exists = await fs.pathExists(d2Fullpath);

    if (!exists) {
      throw new Error(
        `The path ${d2Fullpath} specified for tag {% d2_file %} on file ${context.source} does not exists`
      );
    }

    const d2ContentBuffer = await fs.readFile(d2Fullpath);

    return await generateTagFromSource(
      path.dirname(d2Fullpath),
      d2ContentBuffer.toString("utf-8"),
      parsedArgs
    );
  };
}

exports.d2FileTag = d2FileTagFactory;
exports.d2Tag = d2TagFactory;
