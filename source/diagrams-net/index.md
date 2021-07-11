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
```
{% diagramsnet "diagram.drawio" 
   highlight="#0000ff"
   lightbox=false
   nav=true
   resize=false
   page=1
   toolbar="lightbox zoom layers pages" 
%}
```

{% diagramsnet "diagram.drawio" 
highlight="#0000ff"
lightbox=false
nav=true
resize=false
page=1
toolbar="lightbox zoom layers pages" 
%}