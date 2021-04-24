const removeExistingWords = () => {
  const elements = document.querySelectorAll('span');
  if (elements.length > 0) {
    elements.forEach((element) => {
      element.remove();
    });
  }
};

const generateError = (input, paragraph) => {
  const paragraphLetter = paragraph;
  if (input.value.trim() === '') {
    paragraphLetter.textContent = 'Por favor, digite o conteúdo da carta.';
  }
};

const generateWords = () => {
  const input = document.querySelector('#carta-texto');
  const paragraphLetter = document.querySelector('#carta-gerada');

  generateError(input, paragraphLetter);
  removeExistingWords();

  const arrayWord = input.value.split(' ');
  arrayWord.forEach((word) => {
    const span = document.createElement('span');
    span.textContent = word;
    paragraphLetter.appendChild(span);
  });
};

const generateLetter = () => {
  const btn = document.querySelector('#criar-carta');
  btn.addEventListener('click', generateWords);
};

window.onload = function onload() {
  generateLetter();
};
