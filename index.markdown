---

layout: home

---

{% assign sorted_sections = site.sections | sort: 'weight' %}
{% for section in sorted_sections %}
  {% if section.background.style == "full" %}
  <section id="{{ section.title }}" class="p-0{% if section.color %} scheme-{{ section.color }}{% endif %}">
    <div class="scroll-reveal background-container full grid-breakout{% if section.padding %} p-{{ section.padding }}{% endif %}" style="background-image: url({{ site.baseurl }}/assets/images/{{ section.background.image | append: '.webp' }});">
      {% if section.headline %}<h2 class="headline scroll-reveal">{{ section.headline }}</h2>{% endif %}
      <div class="{% if section.grid %}col{% if section.grid %} grid-{{ section.grid }}{% endif %}{% endif %}">
        {{ section.content | markdownify }}
      </div>
    </div>
  </section>
  {% else %}
  <section id="{{ section.title }}" class="full grid-breakout{% if section.color %} scheme-{{ section.color }}{% endif %}{% if section.padding %} p-{{ section.padding }}{% endif %}">
    <div class="{% if section.format %}{{ section.format }}{% endif %}">
      {% if section.background.style == "container" %}
        <div class="scroll-reveal bg-img p-3 grid-breakout{% if section.background.color %} scheme-{{ section.background.color }}{% endif %}" style="background: {% if section.background.gradient %}linear-gradient(hsl(var(--{{ section.background.gradient }})) -10%, transparent 40%), {% endif %}url({{ site.baseurl }}/assets/images/{{ section.background.image }}.{{ section.background.filetype }});">
          <div class="content">
            {% if section.headline %}<h2 class="headline scroll-reveal">{{ section.headline }}</h2>{% endif %}
            <div class="{% if section.grid %}col {% if section.grid %} grid-{{ section.grid }}{% endif %}{% endif %}">
              {{ section.content | markdownify }}
            </div>
          </div>
        </div>
      {% else %}
        {% if section.headline %}<h2 class="headline scroll-reveal">{{ section.headline }}</h2>{% endif %}
        <div class="{% if section.grid %}col{% if section.grid %} grid-{{ section.grid }}{% endif %}{% endif %}">
          {{ section.content | markdownify }}
        </div>
      {% endif %}
    </div>
  </section>
  {% endif %}
{% endfor %}

<script src="https://cdn.jsdelivr.net/npm/@figmania/loader/build/index.umd.js?ver=1.0" id="svg-animate-js"></script>