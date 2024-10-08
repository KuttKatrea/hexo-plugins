"use strict";
function getConfig(hexo) {
  const d2Config = hexo.config.d2 || {};

  const tagConfig = Object.assign(
    {
      "d2_path": "d2",
      "bundle": null,
      "force-appendix": null,
      "debug": null,
      "layout": null,
      "theme": null,
      "dark-theme": null,
      "pad": null,
      "animate-interval": null,
      "timeout": null,
      "sketch": null,
      "center": null,
      "scale": null,
      "target": null,
      "font-regular": null,
      "font-italic": null,
      "font-bold": null,
      "font-semibold": null,
    },
    d2Config.tag
  );

  return {
    tag: tagConfig,
  };
}

module.exports = getConfig;
