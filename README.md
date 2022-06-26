## Liquid Test Answers

***Question 1:***
*Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.*

**ANSWER**
I would create a new section 'editable-text.liquid' that would be able to be added like any other section on the home page through the theme customizer by clicking 'add section'. The liquid file would look like:

```
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