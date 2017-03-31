---
layout: page
permalink: /
---

<div class="home">
  <ul class="post-list">
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
</ul>
  <p class="rss-subscribe">Abonniere <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
</div>
