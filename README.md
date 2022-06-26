## Liquid Test Answers 

#### QUESTION 1:
*Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.*

**ANSWER:**
I would create a new section 'editable-text.liquid' that would be able to be added like any other section on the home page through the theme customizer by clicking 'add section'. The liquid file would look like:

```liquid
{%- assign homeText = section.settings.home_text -%}
{%- assign fontSize = section.settings.home_text_font_size | append: "px" -%}
{%- assign fontColor = section.settings.home_text_font_color -%}

<div class="container">
    <p>{{ homeText }} </p>
</div>
{% style %}
    .home-editable-text{
        display: inline-flex;
        width: 100vw;
        position: relative;
        align-items:center;
        justify-content:center;
    }
    .home-editable-text p {
        font-size: {{ fontSize }};
        color: {{ fontColor }};
    }
{% endstyle %}
{% schema %}
    {
        "name": "Editable Home Text",
        "class": "home-editable-text",
        "settings": [
            {
                "type": "text",
                "id" : "home_text",
                "label": "Your Editable Text",
                "default": "Your Text Here"
            },
            {
                "type": "range",
                "id": "home_text_font_size",
                "min": 12,
                "max": 24,
                "step": 1,
                "unit": "px",
                "label": "Font size",
                "default": 16
            },
            {
                "type": "color",
                "id": "home_text_font_color",
                "label": "Font Color",
                "default": "#d30000"
            }
        ],
        "presets": [
        {
            "category": "Home Page Editable Text",
            "name": "Home Editable Text"
        }
        ]
    }
{% endschema %}
```




***QUESTION 2:***
*How would you add the collection featured image as a banner on the collection liquid template?*

**ANSWER:**
```liquid
{% if collection.image != blank %}
    {{ collection.image.src | collection_img_url: '1400x' | img_tag: collection.title }}
{% endif %}
```




***QUESTION 3:***
*Using liquid code and HTML, create a simple pagination container, "< 1 2 ... 5 >".*

**ANSWER:**
```liquid
{%- paginate collection.products by 5 -%}
    {%- for product in collection.products -%}
        <!-- show product details here -->
    {%- endfor -%}
    {{ paginate | default_pagination: next: '>', previous: '<' }}
{%- endpaginate -%}
```

or I would create a snippet 'simple-pagiginate.liquid' render it in collection page.

```liquid
{% paginate collection.products by 2 %}
    {% for product in collection.products %}
        {{ product.title }}  
    {% endfor %}
    {%- if paginate.pages > 1 -%}
        <nav role="navigation">
            <ol class="pagination">
                {%- if paginate.previous-%}
                    <li>
                        <a href="{{ paginate.previous.url }}">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="visuallyhidden">page</span>
                        </a>
                    </li>
                {%- else -%}
                    <li class="disabled">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="visuallyhidden">page</span>
                    </li>
                {%- endif -%}

                {%- for part in paginate.parts -%}
                    {%- if part.is_link -%}
                        <li>
                            <a href="{{ part.url }}">
                                <span class="visuallyhidden">page</span> {{ part.title }}
                            </a>
                        </li>
                    {%- else -%}
                        {%- if part.title == paginate.current_page -%}
                            <li class="active" aria-current="page">
                                <span class="visuallyhidden">page</span> {{ part.title }}
                            </li>
                        {%- else -%}
                            <li>
                                <span class="visuallyhidden">page</span> {{ part.title }}
                            </li>
                        {%- endif -%}
                    {%- endif -%}
                {%- endfor -%}

                {%- if paginate.next -%}
                    <li>
                        <a href="{{ paginate.next.url }}">
                            <span class="visuallyhidden">page</span>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                {%- else -%}
                    <li class="disabled">
                        <span class="visuallyhidden">page</span>
                        <span aria-hidden="true">&raquo;</span>
                    </li>
                {%- endif -%}
            </ol>
        </nav>
    {%- endif -%}
{%- endpaginate -%}

{%- style -%}
    .visuallyhidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
    }

    .pagination li {
        display: inline; 
        margin: 0 5px;
    }
{%- endstyle -%}
```




***QUESTION 4:***
*Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.*

**ANSWER:**
```liquid
{% assign blueShirt = all_products['blue-t-shirt'] %}
{% assign blueShirtId = blueShirt.id %}
{% assign blueShirtTitle = blueShirt.title %}
{% assign blueShirtHandle = blueShirt.handle %}
{% assign blueShirtPrice = blueShirt.price %}
{% assign blueShirtUrl = shop.url | append: '/products/' | append: blueShirtHandle %}
{% assign blueShirtImg = blueShirt.featured_image | img_url: "large" %}
```




***QUESTION 5:***
*Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later:*

**ANSWER:**

Create initial string to convert to array of substrings
```liquid
{% assign items = 'fruit:apple,vegetable:carrot,cloth:t-shirt,denim:jeans' %}
```

Split item string into array of substrings on the ','
```liquid
{% assign objArr = items | split: ',' %}
```

Define empty variables to use as arrays that will store the split key and value later 
```liquid
{% assign keyArr = ''%}
{% assign valArr = ''%}
```

Loop through objArr and split keys and values into their own variables
```liquid
{% for obj in objArr %}
    {% assign key = obj | split: ':' | first %}
    {% assign value = obj | split: ':' | last %}
    {% assign keyArr = keyArr| append: ',' | append: key  %}
    {% assign valArr = valArr| append: ',' | append: value  %}
{% endfor %}
```

Split keyArr/valArr string into array of substrings on the ','
```liquid
{% assign keyArr = keyArr | remove_first: ',' | split: ',' %}
{% assign valArr = valArr | remove_first: ',' | split: ',' %}
```

```liquid
{% for obj in objArr %}
    {{valArr[forloop.index0]}}
{% endfor %}
```