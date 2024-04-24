const parseTagArguments = require("hexo-util-parse-tag-arguments");

const pug = require('pug');
const path = require('path');
const uuid = require('uuid');

hexo.extend.tag.register('bpmnjs', (args) => {
    args = parseTagArguments({
      sourceArguments: args,
      defaultKey: "file",
      defaultArguments: {height: "120px"}
    })

    args.id = uuid.v4();

    const filepath = path.join(__dirname, 'templates/bpmn-embed.pug');

    return pug.renderFile(filepath, args)

}, {ends: false});


hexo.extend.filter.register('after_render:html', function(str) {
    return str.replace(
        '</head>',
        '<!-- Start: BPMN Viewer -->\n' +
        '<script type="text/javascript" src="https://unpkg.com/bpmn-js@8/dist/bpmn-navigated-viewer.development.js"></script>\n' +
        '<style type="text/css" rel="stylesheet" href="https://unpkg.com/bpmn-js@8/dist/assets/diagram-js.css"></style>\n' +
        '<script type="text/javascript" src="https://unpkg.com/jquery@3/dist/jquery.js"></script>\n' +
        '<style type="text/css" rel="stylesheet">#canvas { height: 100%; padding: 0; margin: 0; } </style>\n' +
        '<!-- End: BPMN Viewer -->\n' +
        '</head>'
    );
});
