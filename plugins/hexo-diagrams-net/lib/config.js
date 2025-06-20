"use strict";
function getConfig(hexo) {
  const drawioConfig = hexo.config.drawio || {};

  const defaultArguments = Object.assign(
    {
      'highlight': '#0000ff',
      'lightbox': "false",
      'nav': "true",
      'resize': "false",
      'toolbar': 'lightbox zoom layers pages',
    },
    drawioConfig.default_arguments
  );

  return {
    defaultArguments
  };
}

module.exports = getConfig;
