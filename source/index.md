---
title: Kutt Katrea's plugins for Hexo 
---

As a developer, sometimes (many times) you need to write some documentation for your projects.

As a developer, the best way to write docs is in a format similar to the one you work on (as code).

That's why writing documentation in Markdown feels very natural, and using a static site generator like Jekyll, Hugo or Hexo is very similar to writing code (write, build, test and publish).

But "text" isn't the only kind of content you do need in documentation. Normally, you also need: tables, diagrams and other embedded content.

Some of that content can only be inserted in your Markdown files in a hacky way, for example to include [PlantUML] diagrams you can pre-render it and and include it as an image, or use an online server to generate it on-the-fly from a long pre-generated URL.

[Diagrams.net] files are another beast. They can also be prerendered or can be inserted as an iframe (iframe should be crafted to be well inserted).

The plugins I'm offering here try to solve this problem by giving a natural way to insert content directly in the source code of the page, or from a source file that can be saved and edited besides the Markdown files without the needing of pre-rendering.  

[plantuml]: https://plantuml.com
[diagrams.net]: https://diagrams.net