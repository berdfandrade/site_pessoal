

const accordionBtn = document.querySelector('.accordion-btn');
const accordionContent = document.querySelector('.paragrafo-container');
const accordion = document.querySelector('.continer-habilidade');

accordionContent.addEventListener('click', () => {
  accordion.classList.toggle('active');
});
