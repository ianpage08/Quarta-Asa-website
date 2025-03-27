// galeria-personagens.js
let count = 0;
const slides = document.querySelectorAll('.itens-personagens');
const radios = document.querySelectorAll('input[name="radio-btn"]');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('ativo');
    if (i === index) {
      slide.classList.add('ativo');
    }
  });
  radios.forEach((radio, i) => {
    radio.checked = (i === index);
  });
}

function nextSlide() {
  count = (count + 1) % slides.length;
  showSlide(count);
}

setInterval(nextSlide, 5000);

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    showSlide(index);
    count = index;
  });
});

// Inicialização
showSlide(0);