const navToggle = document.querySelector('.nav-toggle') as HTMLDivElement;
const bars = document.querySelector('.bars') as HTMLDivElement;
const times = document.querySelector('.times') as HTMLDivElement;
const nav = document.querySelector('.nav') as HTMLElement;
const links = nav.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  let isActive = nav.classList.contains('active');

  if (isActive) {
    bars.style.display = 'none';
    times.style.display = 'flex';
  } else {
    bars.style.display = 'flex';
    times.style.display = 'none';
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    bars.style.display = 'flex';
    times.style.display = 'none';
  });
});

const yearBox = document.querySelector('.year') as HTMLSpanElement;
yearBox.innerText = new Date().getUTCFullYear().toString();
