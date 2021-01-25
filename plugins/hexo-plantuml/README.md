# PlantUML plugin for Hexo

Allows to insert a PlantUML diagram inline:

~~~
{% plantuml %}
@startuml
a -> b
b -> c
a <- c
@enduml
{% endplantuml %}
~~~

Or from file:

~~~
{% plantuml_from_file diagram.puml %}
~~~

