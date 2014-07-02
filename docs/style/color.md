Color (scss/style/_color.scss)
===

Style rules correspond directly to the [Material Design color specifications][]

### Text

Apply text color variables directly to element styles, like `body { color: $color-text; }`

[Text specifications][]

#### Standard

Text colors for use on a white background

- color-text - standard text on a white background
- color-icons - icons and secondary text on a white background
- color-hint - hint text on a white background
- color-dividers - dividers on a white background

#### Inverse

Text colors for use on a colored background

- color-text-inverse - standard text on a colored background
- color-icons-inverse - icons and secondary text on a colored background
- color-hint-inverse - hint text on a colored background
- color-dividers-inverse - dividers on a colored background

### Palette

Include primary or accent color palette mixins to set the palette prior to styling any elements. Follow the [palette choice specifications][] to select the appropriate color hues. Selected hues should be directly applied to element styles.

```scss
@import "style/color";
@include color-primary-indigo; // Primary palette now set to indigo
@include color-accent-pink;    // Accent palette now set to pink

...

.header {
  background-color: $color-primary-500;
}
```


[material design color specifications]: http://www.google.com/design/spec/style/color.html
[text specifications]: http://www.google.com/design/spec/style/color.html#ui-color-application-use-alpha-values
[palette choice specifications]: http://www.google.com/design/spec/style/color.html#ui-color-application-choose-palette