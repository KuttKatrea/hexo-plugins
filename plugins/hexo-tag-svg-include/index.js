const parseTagArguments = require("hexo-util-parse-tag-arguments");
const uuid = require('uuid');
const path = require("path");
const fs = require("fs-extra");

hexo.extend.tag.register(
  "svg_include",
  async function (args) {
      const parsedArgs = parseTagArguments({
          sourceArguments: args,
          defaultKey: "file",
          defaultArguments: {
              id: uuid.v4()
          }
      })

    const svgPath = parsedArgs.file;
    const context = this;

    if (!svgPath) {
      throw new Error(
        `No file specified for tag {% svg_include %} on file ${context.source}`
      );
    }

    const includePath = path.resolve(
        path.dirname(context.full_source),
        parsedArgs.file
      );

    const contentBuffer = await fs.readFile(includePath);

    return `<div id="${args.id}" class="svg-included" >${contentBuffer.toString("UTF-8")}</div>`;
  },
  {
    async: true
  }
);
