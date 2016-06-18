---
layout: post
title:  "Eine persönliche Webseite mit Jekyll bauen. Teil II."
date:   2016-06-25 20:00:00 +0200
categories: accessability w3c
excerpt: > # this means to ignore newlines until "baseurl:"
  Erste Schritte in Web Accessability
---

[Easy Checks](https://www.w3.org/WAI/eval/preliminary)

## Seitentitel

Die Titel der Seiten sollen klar erkennbar machen, um welche Seite es in dem jeweiligen Tab des Browsers geht. Daher sollen sie untereinander klar abgegrenzt sein und die Funktion der jeweiligen Seite hervorheben, aber es soll auch direkt klar sein, auf welcher Website man sich überhaupt befindet. Daher habe ich den Title der gesamten Webseite mit in die Title der Einzelseiten übernommen z.B. "Knut Jackowski - Blog".

## Externe Artikel verlinken

[External Posts in Jekyll](https://robots.thoughtbot.com/external-posts-in-jekyll)

## Artikelbeschreibungen in der Blogübersicht

Das Standardaussehen der Artikelliste in einem mit Jekyll erstellten Blog enthält nur die Titel der Artikel und das Datum der Veröffentlichung. Um eine Idee davon zu haben, wovon ein Artikel handelt, ist das möglicherweise etwas wenig.

Bei vielen Blogs ist es entweder umgekehrt, es wird also schon der gesamte Artikel in der Artikelliste angezeigt, oder aber es wird der Beginn des Artikels mit zusammen mit einem "Weiterlesen" Verweis ausgegeben.

Ich habe mich hier für eine dritte Möglichkeit entschieden und eine Variable namens "description" eingeführt, die wie die gleichnamige Variable aus der _config.yml, auch über mehrere Zeilen gehen kann, wenn man ein ">" voranstellt.

Diese Artikelbeschreibung ist optional, aber wenn es eine gibt, wird sie sowohl auf der Übersicht angezeigt, also auch im head der html-Seite des Artikels als Metainformation für Suchmaschinen.

{% highlight html %}
{% raw %}

{% for post in site.posts %}
<li>
<span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
<h2>
{% if post.external_url %}
<a class="post-link" href="{{ post.external_url }}">&#8594; {{ post.title }}</a>
{% else %}
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
{% endif %}
</h2>
{% if post.excerpt %}
<p class="post-excerpt">
{{ post.excerpt }}
</p>
{% endif %}
</li>
{% endfor %}

{% endraw %}
{% endhighlight %}
