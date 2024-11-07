# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Launch-countdown-timer/blob/main/screenshot/Launch%20countdown%20timer-mobile.png).
![screenshot desktop](https://github.com/Lo-Deck/Launch-countdown-timer/blob/main/screenshot/Launch%20countdown%20timer-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Launch-countdown-timer).
- Live Site URL: [Website](https://lo-deck.github.io/Launch-countdown-timer/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to make a timer and extract days, hours, minutes and seconds :

```js
timer = Math.floor((launchDate - Date.now()) / 1000);
const days = Math.floor(timer / (60 * 60 * 24));
const hours = Math.floor(timer / (60 * 60)) - days * 24;
const minutes = Math.floor( (timer % (60 * 60)) / 60 );
const secondes = Math.floor( (timer % (60)) );
```

and set an animation 

```js
if(secondes === 0){ //anim minute
   document.querySelector('.li-timer:nth-of-type(3) .up').classList.add('anim-one-time');
   document.querySelector('.li-timer:nth-of-type(3) .down').classList.add('anim-one-time');
}
```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
