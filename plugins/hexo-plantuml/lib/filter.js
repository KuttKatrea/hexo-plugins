"use strict";
function afterRenderFactory(config) {
  return function afterRender(str) {
    return str.replace(
      "</head>",
      `
    <!-- Start: PlantUML -->
    <style type="text/css" rel="stylesheet">
      .plantuml-container {
        width: 100%;
        overflow: auto;
        text-align: center;
      }

      .plantuml-container > svg {
        max-width: 100%; height: unset !important;
      }

      .plantuml-container > img {
        max-width: 100%; height: unset !important;
      }
    </style>
    <!-- End: PlantUML -->
    </head>`
    );
  };
}

exports.afterRender = afterRenderFactory;
