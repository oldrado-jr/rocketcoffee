document.querySelector('.menu').addEventListener('click', (e) => {
  document.querySelector('.menu-mobile').removeAttribute('hidden');
});

document.querySelector('.close-menu').addEventListener('click', (e) => {
  document.querySelector('.menu-mobile').setAttribute('hidden', 'hidden');
});
