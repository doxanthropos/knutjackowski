---
layout: post
title:  "Eine persönliche Webseite mit Jekyll bauen. Teil I"
date:   2016-06-10 20:00:00 +0200
categories: jekyll
---

Nachdem ich an dieser Stelle eine Weile das Ergebnis einer Aufgabe aus dem Curriculum von [FreeCodeCamp]() online hatte, habe ich nach einigen Überlegungen in den letzten Tagen eine Entscheidung getroffen, was ich auf längere Sicht unter dieser URL präsentieren möchte:

Diese Webseite soll ganz allgemein der Ort sein, wo man Informationen von mir oder über mich findet, also Blog, Portfolio, Resumé und Kontaktmöglichkeit in einem.

Sie soll nicht unbedingt fancy und extravagant sein, sondern funktional und schlicht; ein wenig Retrooptik kann nicht schaden, so lange sie technisch auf der Höhe der Zeit ist.

Als "Backend" habe ich mich relativ schnell für [Jekyll](https://jekyllrb.com/) entschieden, einen Generator für statische Webseiten, der in Ruby geschrieben ist, mit einem netten [Template-System](https://github.com/Shopify/liquid/wiki) arbeitet und sehr weit verbreitet ist, so dass es nicht schwer ist, Antworten auf mögliche Fragen zu bekommen. Außerdem kann man die Inhalte mit [Markdown](https://daringfireball.net/projects/markdown/) formatieren, was mir generell sympatisch ist. Ein wenig Erfahrung mit Jekyll habe ich dadurch, dass ich auf [Github ein Blog](http://doxanthropos.github.io/) mit [Octopress](http://octopress.org/) betreibe, einem relativ stark vonkonfiguriertem Jekyll.

Da ich schlichte Designs mag, gefällt mir das Standardaussehen eines mit `jekyll new` erzeugten Blogs schon ganz gut. Ein paar einfache Änderungen waren: als Startseite eine Einzelseite und die Artikelliste als eigene Seite im Menu, das CSS ein wenig anpassen an meine Vorliebe für hellen Text auf dunklem Hintergrund und das Übersetzen der wenigen englischen Wörter, die Teil des Layouts sind (z.B. "subscribe" zu "Abonnieren" und so).

Spannender war dann die Frage, wie man die Datumsangaben verändert. Amerikanische Datumsschreibweise auf einer deutschsprachigen Webseite, das sieht irgendwie falsch aus. Zum Glück gibt es da einen super Blogpost von Alan W. Smith, der alles was man zu Datumsangaben und Jekyll wissen möchte gut und mit Beispielen beschreibt: [Jekyll Date Formatting Examples](http://alanwsmith.com/jekyll-liquid-date-formatting-examples). Im Sinne der Einfachheit habe ich mich für ein einfaches Jahr-Monat-Tag-Schema entschieden:
`date: "%Y-%m-%d"`

Im Footer habe ich mit Hilfe des [Icons von Nick Bumbarger](https://gist.github.com/nbumbarger/8a909f5d8e2d2526ade7) LinkedIn hinzugefügt.

<div class="small-image-right">
<img alt="Portrait" src="/images/pensiveintheforest.jpg" class="profile-image">
</div>

Auf der Startseite sollte dann noch, wie es bei solchen persönlichen Webseiten üblich ist, ein Bild von mir sein. Ich habe mich für ein Bild entschieden, das ich schon an einigen Stellen benutzt habe, aber immer noch ziemlich gut finde. Es kommt leider selten vor, dass ich Bilder von mir mag, da werden die wenigen dann leicht überbenutzt (Gibt es das Wort? Ich habe das englische "overused" im Kopf und das scheint mir dem zu entsprechen.).

Im Menu sollte man erkennen, auf welche Seite man gerade ist. Auch hier bin ich ein Freund von Einfachheit und denke, dass eine Unterstreichung ausreichend ist.

{% highlight css %}
.active {
    text-decoration: underline;
}
{% endhighlight %}

Die Klasse habe ich dann folgendermassen in die Navigationsliste in header.html eingetragen:
{% highlight html %}
{% raw %}
{% if my_page.url == page.url %}
class="active page-link"
{% else %}
class="page-link"
{% endif %}
{% endraw %}
{% endhighlight %}
Für's erste bin ich damit zufrieden und werde jetzt nur noch die Startseite und die Seitenbeschreibung in der _config.yml verfassen, dann kann die Seite hochgeladen werden.

Auf der Kontaktseite werde ich vorerst nur die Kontaktmöglichkeiten angeben, die auch im Footer sind. Längerfristig überlege ich, ob ein Kontaktformular Sinn macht.

