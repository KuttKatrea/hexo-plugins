# Hexo Util: Parse Tag Arguments

Allows to parse:
~~~
{% tag arg1=1 arg2=2 %}
~~~

to
~~~json
{
  "arg1": "1",
  "arg2": "2"
}
~~~

Also supports parsing:

~~~
{% tag 1 arg=2 %}
~~~

to
~~~json
{
  "default": "1",
  "arg2": "2"
}
~~~

## Usage

In the plugin:

~~~js
var parseTagArguments = require("hexo-util-parse-tag-arguments");

hexo.extend.tag.register(
  "custom_tag",
  function (args, content) {
    var tagArguments = parseTagArguments({
      sourceArguments: args,
      defaultKey: "file",
      defaultArguments: {
        format: "svg"
      }
    });

    console.log(tagArguments.file);
    console.log(tagArguments.format);

    return tagArguments.file +  " / " + tagArguments.format;
  }
);
~~~

In the markdown:

~~~md
{% custom_tag source.txt %}
~~~

Is rendered as:

~~~
source.txt / svg
~~~

In the markdown:

~~~md
{% custom_tag source.txt format=png %}
~~~

Is rendered as:

~~~
source.txt / png
~~~

### Examples

TODO:
