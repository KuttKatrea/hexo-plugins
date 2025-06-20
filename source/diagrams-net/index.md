---
title: Diagrams.net
description: Also known as Draw.io
---

## Installation

```
npm install hexo-diagrams-net
```

## Usage

### Simple usage
```
{% diagramsnet "diagram.drawio" %}
```

{% diagramsnet "diagram.drawio" %}

### Legacy tag name
```
{% drawio "diagram.drawio" %}
```

{% drawio "diagram.drawio" %}

### All options

From: https://www.drawio.com/doc/faq/embed-html-options

(`page-id` is a non documented option that sets the `pageId`).

```
{% diagramsnet "diagram.drawio" 
   highlight="#0000ff"
   lightbox=false
   nav=true
   resize=false
   page=1
   page-id="pageById"
   toolbar="lightbox zoom layers pages" 
   toolbar-buttons='{"key": {"title": "CUSTOM"}}'
   toolbar-nohide=false
   max-height=500
   auto-fit=false
   auto-crop=true
   check-visible-state=false
   layers="0 1 2"
   tooltips=false
   toolbar-position=bottom
   zoom=1
   editable=true
   allow-zoom-in=true
   border=16
   center=true
   target=blank
   move=true
   title="Diagram Title"
   edit=_blank
%}
```

{% diagramsnet "diagram.drawio" 
   highlight="#0000ff"
   lightbox=false
   nav=true
   resize=false
   page=1
   page-id="MRuas7O7aRfa1FYKbwvL"
   toolbar="lightbox zoom layers pages" 
   toolbar-buttons='{"key": {"title": "CUSTOM"}}'
   toolbar-nohide=false
   max-height=500
   auto-fit=false
   auto-crop=true
   check-visible-state=false
   layers="0 1 2"
   tooltips=false
   toolbar-position=bottom
   zoom=1
   title="Diagram Title"
   allow-zoom-in=true
   border=16
   center=true
   target=blank
   move=true
   editable=true
   edit=_blank
%}
