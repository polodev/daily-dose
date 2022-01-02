---
title: Daily Learning Jan 02, 2022
layout: post
topic:
  Jekyll
tags:
category:
  - jekyll
---

## Showing liquid tag inside a code block in jekyll site 
Language name will be `liquid`.  Inside between`~~~liquid`  and `~~~` we will encapsulated all code 
`raw` and `endraw`;


## Formatting date field in jekyll

~~~liquid 
{% raw %}  
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
{{ page.date | date: date_format }}
{% endraw %}
~~~


## Getting collection listing page in jekyll

~~~liquid
{% raw %}
<a href="{{site.url}}{{site.baseurl}}/{{page.collection}}">{{ page.collection | capitalize }}</a>
{% endraw %}
~~~
In my case I have condition 

~~~liquid
{% raw %}
{%- if page.collection != 'posts' -%}
<a class="pure-button" href="{{site.url}}{{site.baseurl}}/{{page.collection}}">{{ page.collection | capitalize }}</a>
{%- endif -%}
{% endraw %}
~~~

## Sorting a collection 

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

## `or` liquid operator using in jekyll

~~~liquid
{% raw %}
  {%- if page.tags.size > 0 or page.categories.size > 0 -%}
    &#8239;| &#8239; 
  {%- endif -%}
{% endraw %}
~~~




