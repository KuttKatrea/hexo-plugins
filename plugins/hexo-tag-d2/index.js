/* global hexo */
"use strict";

const tag = require("./lib/tag");
const config = require("./lib/config")(hexo);

hexo.extend.tag.register("d2", tag.d2Tag(config.tag), {
  async: true,
  ends: true,
});

hexo.extend.tag.register(
  "d2_file",
  tag.d2FileTag(config.tag),
  {
    async: true,
  }
);
