function parseSingleArg(singleArg, defaultKey) {
  const pieces = singleArg.split("=", 2);
  if (pieces.length === 1) {
    return [defaultKey, pieces[0]];
  } else {
    return [pieces[0], pieces[1]];
  }
}

/**
 * @typedef {{
 *   sourceArguments: Array<string>,
 *   defaultKey: string,
 *   defaultArguments: Object<string,string>
 * }}
 */
let ParseTagArgumentsOptions;

/**
 * Parse a list of arguments in the form name=value.
 *
 * Optionally, the first value cannot have a name. In that case, the
 * name will be interpreted as the "defaultKey".
 * @param  {ParseTagArgumentsOptions}  options  The options
 * @return {!Object<string,string>} Object with the resulting name-value mapping.
 */
function parseTagArguments(options) {
  const sourceArguments = options.sourceArguments || [];
  const defaultKey = options.defaultKey || "default";
  const defaultArguments = options.defaultArguments || {};

  const namedArguments = Object.assign({}, defaultArguments);

  for (let i = 0; i < sourceArguments.length; i++) {
    const [key, value] = parseSingleArg(sourceArguments[i], defaultKey);
    namedArguments[key] = value;
  }

  return namedArguments;
}

module.exports = parseTagArguments;
