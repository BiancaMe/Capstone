const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  const menu = document.querySelector('.menu-mobile');
  menu.classList.add('open');
});

const menuMobile = document.querySelector('.menu-mobile');
const btn = menuMobile.querySelectorAll('a');
function rOpen() {
  const menu = document.querySelector('.menu-mobile');
  menu.classList.remove('open');
}
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', rOpen);
}

const closeBtn = document.querySelector('.close-pop');
closeBtn.addEventListener('click', rOpen);
