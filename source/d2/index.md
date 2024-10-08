---
title: D2
---
[D2] is a modern language that turns text to diagrams.

## Installation

```
npm install hexo-tag-d2
```

## Usage

### Inline diagram

~~~
{% d2 %}
z: @_d2/local.d2

a -> b
b -> c
a <- c
{% endd2 %}
~~~

{% d2 %}
z: @_d2/local.d2

a -> b
b -> c
a <- c
{% endd2 %}

### From file

~~~
{% d2_file diagram.d2 %}
~~~

> Using this tag will not update the diagram when editing the `d2` file. You should also re-save the markdown file or restart the server.

{% d2_file diagram.d2 %}

[D2]: https://d2lang.com/
