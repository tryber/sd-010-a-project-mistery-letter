const selectButton = document.querySelector('#criar-carta');
const selectInput = document.querySelector('#carta-texto');
const selectP = document.querySelector('#carta-gerada');

if (selectInput.value === '') {
  selectP.innerHTML = 'Por favor, digite o conteúdo da carta.';
}

function generateLetter() {
  const createSpan = document.createElement('span');
  createSpan.innerText = selectInput.value;
  selectP.appendChild(createSpan);
}

selectButton.addEventListener('click', generateLetter);
