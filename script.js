const generate = document.getElementById('criar-carta');
const text = document.querySelector('#carta-texto');
const result = document.querySelector('#carta-gerada');
const counter = document.querySelector('#carta-contador');

generate.addEventListener('click', (event) => {
  event.preventDefault();
  if (!text.value || text.value === '' || text.value === undefined) {
    result.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  const toArray = text.value.split(' ')
    .map((word) => (`<span>${word}</span>`));
  if (toArray.lenght < 1) {
    result.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  result.innerHTML = `${toArray}`;
  counter.innerHTML = `${toArray.lenght}`;
});
