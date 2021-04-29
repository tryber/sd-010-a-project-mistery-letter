const textInput = document.getElementById('carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');
const wordCount = document.querySelector('#carta-contador');
const classesArr = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];
function generateRandomClass(event) {
  classesArr.forEach((classe) => {
    const randomClass = classe[Math.floor(Math.random() * classe.length)];
    event.classList.add(randomClass);
  });
}

function generateLetter() {
  const letterArr = textInput.value.split(' ');
  generatedLetter.innerText = '';
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  if (textInput.value.trim() === '') {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    wordCount.innerText = 0;
  } else {
    letterArr.forEach((word) => {
      const createSpan = document.createElement('span');
      createSpan.innerText = word;
      generatedLetter.appendChild(createSpan);
      generateRandomClass(createSpan);
    });
    wordCount.innerText = generatedLetter.children.length;
  }
}

window.onload = () => {
  const inputButton = document.querySelector('#criar-carta');
  inputButton.addEventListener('click', generateLetter);
};
