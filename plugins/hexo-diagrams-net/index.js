/* global hexo */
const parseTagArguments = require("hexo-util-parse-tag-arguments");

function quote(str) {
  return str.replace(/"/g, '&quot;');
}

function stringToBool(stringOption) {
  return stringOption.toLowerCase() === "true"
}

function mapOptionTypes(context, stringOptions) {
  return {
    'highlight': stringOptions['highlight'],
    'lightbox': stringToBool(stringOptions['lightbox']),
    'nav': stringToBool(stringOptions['nav']),
    'resize': stringToBool(stringOptions['resize']),
    'page': parseInt(stringOptions['page'], 10),
    'toolbar': stringOptions['toolbar'],
    'url': stringOptions['url'],
  }
}

function renderTag(args) {
  const context = this;

  const stringOptions = parseTagArguments({
    sourceArguments: args,
    defaultKey: "url",
    defaultArguments: {
      'highlight': '#0000ff',
      'lightbox': "false",
      'nav': "true",
      'resize': "false",
      "page": "0",
      'toolbar': 'lightbox zoom layers pages',
    }
  });

  const typedOptions = mapOptionTypes(context, stringOptions)

  return `
<div class="mxgraph-container">
    <div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="${quote(JSON.stringify(typedOptions))}"></div>
</div>
`;
}

hexo.extend.tag.register('diagramsnet', renderTag, {ends: false});
hexo.extend.tag.register('drawio', renderTag, {ends: false});

hexo.extend.filter.register('after_render:html', function(str) {
  const codeToInject = `
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
<style>
.geDiagramContainer { width: 100% !important; }
</style>
</body>
`;

  return str.replace('</body>', codeToInject);
});
