"use strict";

const path = require("path");
const diagram = require("./diagram");

function plantumlRendererFactory(rendererConfig) {
  const renderer = async function plantumlRenderer(data, _options) {
    const plantumlOptions = Object.assign({}, rendererConfig);

    if (!["ascii", "unicode", "svg", "eps"].includes(plantumlOptions.format)) {
      throw Error(
        "PlantUML Renderer only support text-based formats for rendering."
      );
    }

    plantumlOptions.include = [
      ...rendererConfig.include,
      path.dirname(data.path),
    ];

    const svgContentBuffer = await diagram.generate(data.text, plantumlOptions);

    return svgContentBuffer.toString("utf-8");
  };

  renderer.disableNunjucks = true;
  return renderer;
}

module.exports = plantumlRendererFactory;
