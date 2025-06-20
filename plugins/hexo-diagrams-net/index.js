/* global hexo */
const parseTagArguments = require("hexo-util-parse-tag-arguments");
const config = require("./lib/config")(hexo);

function quote(str) {
  return str.replace(/"/g, '&quot;');
}

function stringToString(options, key) {
  if (!options.hasOwnProperty(key)) {
    return null;
  }

  return options[key];
}

function stringToBool(options, key) {
  if (!options.hasOwnProperty(key)) {
    return null;
  }

  let stringOption = options[key];

  if (stringOption.toLowerCase() === "true") return true;
  if (stringOption.toLowerCase() === "false") return false;
  
  return stringOption;
}

function stringToInt(options, key) {
  if (!options.hasOwnProperty(key)) {
    return null;
  }

  return parseInt(options[key], 10);
}

function stringToObject(options, key) {
  if (!options.hasOwnProperty(key)) {
    return null;
  }

  return JSON.parse(options[key]);
}

function removeNulls(obj) {
  // https://stackoverflow.com/questions/25421233/javascript-removing-undefined-fields-from-an-object/40924449#40924449
  return Object.keys(obj).reduce((acc, key) =>
    obj[key] === null ? { ...acc } : { ...acc, [key]: obj[key] },
  {},
);
}

function mapOptionTypes(context, stringOptions) {
  return removeNulls({
    'highlight': stringToString(stringOptions, 'highlight'),
    'toolbar': stringToString(stringOptions, 'toolbar'),
    'url': stringToString(stringOptions, 'url'),
    'toolbar-buttons': stringToObject(stringOptions, 'toolbar-buttons'),
    'toolbar-nohide': stringToBool(stringOptions, 'toolbar-nohide'),
    'max-height': stringToInt(stringOptions, 'max-height'),
    'auto-fit': stringToBool(stringOptions, 'auto-fit'),
    'auto-crop': stringToBool(stringOptions, 'auto-crop'),
    'check-visible-state': stringToBool(stringOptions, 'check-visible-state'),
    'lightbox': stringToBool(stringOptions, 'lightbox'),
    'layers': stringToString(stringOptions, 'layers'),
    'tooltips': stringToBool(stringOptions, 'tooltips'),
    'toolbar-position': stringToString(stringOptions, 'toolbar-position'),
    'zoom': stringToString(stringOptions, 'zoom'),
    'editable': stringToBool(stringOptions, 'editable'),
    'allow-zoom-in': stringToBool(stringOptions, 'allow-zoom-in'),
    'border': stringToString(stringOptions, 'border'),
    'page': stringToInt(stringOptions, 'page'),
    'pageId': stringToString(stringOptions, 'page-id'),
    'nav': stringToBool(stringOptions, 'nav'),
    'resize': stringToBool(stringOptions, 'resize'),
    'center': stringToBool(stringOptions, 'center'),
    'target': stringToString(stringOptions, 'target'),
    'move': stringToBool(stringOptions, 'move'),
    'title': stringToString(stringOptions, 'title'),
    'edit': stringToString(stringOptions, 'edit'),
  });
}

function renderTag(args) {
  const context = this;

  const stringOptions = parseTagArguments({
    sourceArguments: args,
    defaultKey: "url",
    defaultArguments: config.defaultArguments
  });

  const typedOptions = mapOptionTypes(context, stringOptions)

  return `
<div class="mxgraph-container">
    <div class="mxgraph" data-mxgraph="${quote(JSON.stringify(typedOptions))}"></div>
</div>
`;
}

hexo.extend.tag.register('diagramsnet', renderTag, {ends: false});
hexo.extend.tag.register('drawio', renderTag, {ends: false});

hexo.extend.filter.register('after_render:html', function(str) {
  const codeToInject = `
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
<style>
.mxgraph-container { width: 100%; }
.mxgraph {
  width: 100% !important;
  border:1px solid transparent;
}
.geDiagramContainer { width: 100% !important; }
</style>
</body>
`;

  return str.replace('</body>', codeToInject);
});
