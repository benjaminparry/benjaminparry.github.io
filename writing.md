---
layout: layout
title: is writing
permalink: /writing/
published: true
---

# Writing

 <ul>
   {% for post in site.posts %}
   <li>
<span>{{ post.date | date: "%B %e, %Y" }}</span> <a href="{{ post.url }}">{{ post.title }}</a>
   </li>
   {% endfor %}
 </ul>