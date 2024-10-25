---
layout: portfolio
title: Portfolio
permalink: /portfolio/
format: full p-s-1
color: mushroom
background: 
  image: clouds
  filetype: jpg
  color: dark
---

{% assign sorted_portfolio_items = site.portfolio | sort: 'weight' %}
{% for case in sorted_portfolio_items %}
<div class="col-1-1 card scheme-light scroll-reveal">
  <a href="{{ case.url }}" class="card-header">
      <img src="{{ site.baseurl }}/assets/images/icon0{{ case.weight }}.png" class="card-icon" loading="lazy">
      <h3 class="card-title">{{ case.title }}</h3>
  </a>
  <div class="card-body col grid-2d">
    <div class="col-1-2 wireframe">
      <div class="wireframe-nav">
        <div class="wireframe-ellipses">
          <div class="wireframe-ellipse"></div>
          <div class="wireframe-ellipse"></div>
          <div class="wireframe-ellipse"></div>
        </div>
        <div class="wireframe-arrows">
          <div class="wireframe-arrow-left"></div>
          <div class="wireframe-arrow-right"></div>
        </div>
        <div class="wireframe-search">
          <div class="wireframe-rectangle">
          </div>
        </div>
      </div>
      <div class="wireframe-static wireframe-16-9">
        <picture>
          <source type="image/webp" srcset="{{ site.baseurl }}/assets/images/{{ case.img }}.webp" loading="lazy">
          <a href="{{ case.url }}">
            <img src="{{ site.baseurl }}/assets/images/{{ case.img }}.png" loading="lazy">
          </a>
        </picture>
      </div>
    </div>
    <div class="col-2-2">
      <p>{{ case.summary }}</p>
      <p class="text-mono"><a href="{{ case.url }}">case study →</a></p>
    </div> 
  </div>
</div>
{% endfor %}