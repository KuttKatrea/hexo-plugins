/* global hexo */
"use strict";

const renderer = require("./lib/renderer");
const tag = require("./lib/tag");
const filter = require("./lib/filter");
const config = require("./lib/config")(hexo);

if (config.renderer.enabled) {
  hexo.extend.renderer.register(
    "iuml",
    config.renderer.format,
    renderer(config.renderer),
    false
  );
  hexo.extend.renderer.register(
    "puml",
    config.renderer.format,
    renderer(config.renderer),
    false
  );
}

hexo.extend.tag.register("plantuml", tag.plantumlTag(config.tag), {
  async: true,
  ends: true,
});

hexo.extend.tag.register(
  "plantuml_from_file",
  tag.plantumlFromFileTag(config.tag),
  {
    async: true,
  }
);

if (config.tag.injectStyles) {
  hexo.extend.filter.register("after_render:html", filter.afterRender(config));
}
