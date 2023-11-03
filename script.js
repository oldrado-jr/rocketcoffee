document.querySelector('.menu').addEventListener('click', (e) => {
  e.target.setAttribute('hidden', 'hidden');
  document.querySelector('.close-menu').removeAttribute('hidden');
  document.querySelector('.menu-mobile').removeAttribute('hidden');
});

document.querySelector('.close-menu').addEventListener('click', (e) => {
  e.target.setAttribute('hidden', 'hidden');
  document.querySelector('.menu').removeAttribute('hidden');
  document.querySelector('.menu-mobile').setAttribute('hidden', 'hidden');
});
