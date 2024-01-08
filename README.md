# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/responsive-ecommerce-product-page-Lu59KUNRB0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [E-Commerce Product Page Solution](https://www.frontendmentor.io/solutions/responsive-ecommerce-product-page-Lu59KUNRB0)
- Live Site URL: [E-Commerce product Page](https://developer-ashutosh.github.io/E-Commerce-Product-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```html
<div class="cartNotification" data-count="0"></div>
```

```css
.proud-of-this-css {
  content: attr(data-count);
  filter: brightness(0.5);
}
```

```js
const proudOfThisFunc = () => {
  cartNotification.setAttribute("data-count", quantity.innerText);
  setTimeout(() => {
    cartSection.classList.remove("activate");
  }, 2500);
};
```

## Author

- GitHub - [Ashutosh Kumar](https://www.github.com/Developer-Ashutosh/)
- Frontend Mentor - [@Ashutosh Kuamr](https://www.frontendmentor.io/profile/yourusername)
