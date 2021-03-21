const selectButton = document.querySelector('#criar-carta');
const selectInput = document.querySelector('#carta-texto');
const selectP = document.querySelector('#carta-gerada');

function generateLetter() {
  const createSpan = document.createElement('span');
  createSpan.innerText = selectInput.value;
  selectP.appendChild(createSpan);
}

selectButton.addEventListener('click', generateLetter);
