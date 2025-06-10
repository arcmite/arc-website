---
layout: single
title: "Guides"
permalink: /guides/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/hero_background.png
excerpt: "Step-by-step walkthroughs and setup guides, from basic installs to visual configuration and advanced tweaks."
---

Browse our available guides below.

<ul>
  {% assign sorted_guides = site.guides | sort: "title" %}
  {% for guide in sorted_guides %}
    <li><a href="{{ guide.url | relative_url }}">{{ guide.title }}</a></li>
  {% endfor %}
</ul>
