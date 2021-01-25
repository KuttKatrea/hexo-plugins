"use strict";

const path = require("path");
const fs = require("fs-extra");
const plantuml = require("node-plantuml");
const Q = require("q");

/**
 * @typedef {{
 *      include: Array<string>,
 *      format: string,
 *      encoding: string
 * }}
 */
let PlantumlOptions;

/**
 * Generate the PlantUML diagram
 * @param {string} content
 * @param {PlantumlOptions} options
 * @returns {Promise}
 */
function generate(content, options) {
  const plantumlOptions = Object.assign({}, options);

  if (plantumlOptions.include.length > 0) {
    plantumlOptions.include = plantumlOptions.include.join(path.sep);
  }

  let deferred = Q.defer();

  let gen = plantuml.generate(content, options);
  let chunks = [];

  gen.out.on("data", (chunk) => {
    chunks.push(chunk);
  });
  gen.out.on("end", () => {
    let buffer = Buffer.concat(chunks);
    deferred.resolve(buffer);
  });

  return deferred.promise;
}

exports.generate = generate;
