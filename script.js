const inputText = document.querySelector('#carta-texto');
const btnText = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');

const appendSpan = (text) => {
  const span = document.createElement('span');
  span.innerText = text;
  letter.appendChild(span);
};

btnText.addEventListener('click', () => {
  const text = inputText.value;
  if (text.length === 0) appendSpan('Por favor, digite o conteúdo da carta.');
  else letter.innerText = '';
  const textArray = text.split(' ');
  textArray.forEach((element) => appendSpan(element));
});
