const textInput = document.getElementById('carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');
const wordCount = document.querySelector('#carta-contador');
const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotate = ['rotateleft', 'rotateright'];
const groupSkew = ['skewleft', 'skewright'];

function generateRandomClass(event, className) {
  const randomClass = className[Math.floor(Math.random() * className.length)];
  event.classList.add(randomClass);
}

// eslint-disable-next-line max-lines-per-function
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
      generateRandomClass(createSpan, groupStyle);
      generateRandomClass(createSpan, groupSize);
      generateRandomClass(createSpan, groupRotate);
      generateRandomClass(createSpan, groupSkew);
    });
    wordCount.innerText = generatedLetter.children.length;
  }
}

window.onload = () => {
  const inputButton = document.querySelector('#criar-carta');
  inputButton.addEventListener('click', generateLetter);
};
