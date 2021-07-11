"use strict";
function getConfig(hexo) {
  const plantumlConfig = hexo.config.plantuml || {};

  const rendererConfig = Object.assign(
    {
      enabled: false,
      format: "svg",
      charset: "utf-8",
      include: [],
    },
    plantumlConfig.renderer
  );

  const tagConfig = Object.assign(
    {
      format: "svg",
      charset: "utf-8",
      include: [],
      alt: "PlantUML Diagram",
      injectStyles: true,
    },
    plantumlConfig.tag
  );

  return {
    renderer: rendererConfig,
    tag: tagConfig,
  };
}

module.exports = getConfig;
