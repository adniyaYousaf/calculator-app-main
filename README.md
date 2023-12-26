# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![](./design/desktop-design-theme-1.jpg)

### Links

- Live Site URL: [Live URL](https://euphonious-llama-66b2ea.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass

### What I learned

I learned how to use mixin in Sass and how to evaluate a string expression in JavaScript.

```sass
@mixin center($center: flex)
    display: $center
    justify-content: center
    align-items: center
```

```js
equalBtn.addEventListener("click", () => {
  if (text.textContent !== "") {
    text.textContent = eval(text.textContent);
  }
});
```


### Useful resources

- [Sass Docs](https://sass-lang.com/documentation/) - This helped me to learn Sass. I really liked its documentation and will use it going forward.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) - This is an amazing website which helped me finally understand eval(). I'd recommend it to anyone still learning this concept.

## Author

- Website - [Adniya Yousaf](https://adniyayousaf.netlify.app)

