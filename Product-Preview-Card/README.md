# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Snapshot](./src/assets/Finalization.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/product-preview-s8YrHMPPBG)
- Live Site URL: [Live](https://fmentorproductpreviewcard.netlify.app/)

## My process

This is my first React.js project outside of a Udemy course and I started it running <code>npx create-react-app --template TypeScript </code>. To practice rendering components on the app.tsx file, I made a card component that contains the project. Afterwards, I made an array that contains all the products in a separate file and passed it into the card component and populated it. Finally, I added prev/next buttons that cycle between the first and second item in the array. However, I couldn't figure out how to set it up in a way that allowed me to cycle through all items with each click.

### Built with

- React.js
- Tailwind CSS
- TypeScript
- Mobile-First Approach

### What I learned

I had the opportunity to apply a lot of concepts that I'm learning from the React course I'm taking on Udemy in a non-course environment -- which is tough, but a great way to learn and apply information. Just in my attempt on implementing the buttons in my desired function I read through a ton of Stack Overflow, React Docs, and Reddit. I learned a lot more about useState and props. Additionally, by using TypeScript I was able to practice proper function implementation

### Continued development

I need to continue learning about useState and props and how to properly apply them from parent to children. Additionally, I need to practice image management as I was trying to trim down the image, however, it would break in wonky ways since it was being passed down from an array. I don't like my solution to srcset.

## Author

- Frontend Mentor - [@GenuineMiyashita](https://www.frontendmentor.io/profile/GenuineMiyashita)
