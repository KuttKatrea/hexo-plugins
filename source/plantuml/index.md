# PlantUML

Inline:

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

From file:

~~~
{% plantuml_from_file diagram.puml %}
~~~

{% plantuml_from_file diagram.puml %}

From file, as PNG:

~~~
{% plantuml_from_file diagram.puml format=png %}
~~~

{% plantuml_from_file diagram.puml %}

As IMG (rendered from file):

~~~md
![Rendered Diagram](diagram.svg)
~~~

![Rendered Diagram](diagram.svg)
