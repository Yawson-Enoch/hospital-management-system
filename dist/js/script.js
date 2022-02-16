"use strict";
const navToggle = document.querySelector('.nav-toggle');
const bars = document.querySelector('.bars');
const times = document.querySelector('.times');
const nav = document.querySelector('.nav');
const links = nav.querySelectorAll('a');
navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    let isActive = nav.classList.contains('active');
    if (isActive) {
        bars.style.display = 'none';
        times.style.display = 'flex';
    }
    else {
        bars.style.display = 'flex';
        times.style.display = 'none';
    }
});
window.addEventListener('scroll', () => {
    nav.classList.remove('active');
    bars.style.display = 'flex';
    times.style.display = 'none';
});
links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        bars.style.display = 'flex';
        times.style.display = 'none';
    });
});
const yearBox = document.querySelector('.year');
yearBox.innerText = new Date().getUTCFullYear().toString();
