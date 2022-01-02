---
title: How reverse collection and limit the post loop in jekyll
topic:
  Jekyll
tags:
category:
  - jekyll
---


## Sorting a collection and reverse collection

~~~liquid
{% raw %}
{% assign statements = site.statements | sort:"title" | reverse  %}
{% endraw %}
~~~

## limit post loop

~~~liquid
{% raw %}
{%- for post in posts limit:2 -%}
{%- for note in notes limit:2 -%}
{% endraw %}
~~~



