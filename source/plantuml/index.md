---
title: PlantUML
---

[PlantUML] is a powerful diagram generator.

## Installation

```
npm install hexo-plantuml
```

## Usage

### Inline diagram

~~~
{% plantuml alt="Alt text" %}
@startuml
!include _plantuml/local.puml
a -> b
b -> c
a <- c
@enduml
{% endplantuml %}
~~~

{% plantuml %}
@startuml
!include _plantuml/local.puml
a -> b
b -> c
a <- c
@enduml
{% endplantuml %}

### From file

~~~
{% plantuml_from_file diagram.puml %}
~~~

> Using this tag will not update the diagram when editing the `puml` file. You should also re-save the markdown file or restart the server.

{% plantuml_from_file diagram.puml %}

### From file, as PNG

~~~
{% plantuml_from_file diagram.puml format=png %}
~~~

{% plantuml_from_file diagram.puml %}

### As IMG (pre-rendered from file)

~~~md
![Rendered Diagram](diagram.svg)
~~~

![Rendered Diagram](diagram.svg)

[PlantUML]: https://plantuml.com/