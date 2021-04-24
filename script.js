const randomClass = () => {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const slopeGroup = ['skewleft', 'skewright'];

  const classesGroup = [styleGroup, sizeGroup, rotationGroup, slopeGroup];
  const randomNumberGroup = Math.floor(Math.random() * classesGroup.length);
  const randomNumberClass = Math.floor(Math.random() * classesGroup[randomNumberGroup].length);
  return classesGroup[randomNumberGroup][randomNumberClass];
};
console.log(randomClass());

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
  const inputParagraph = input;
  const textError = 'Por favor, digite o conteúdo da carta.';
  if (inputParagraph.value.trim() === '') {
    paragraphLetter.textContent = textError;
  } else if (input.value.trim() !== '' && paragraphLetter.textContent === textError) {
    paragraphLetter.textContent = '';
  }
};

const generateWords = () => {
  const input = document.querySelector('#carta-texto');
  const paragraphLetter = document.querySelector('#carta-gerada');

  generateError(input, paragraphLetter);
  removeExistingWords();

  if (paragraphLetter.textContent !== 'Por favor, digite o conteúdo da carta.') {
    const arrayWord = input.value.split(' ');
    arrayWord.forEach((word) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.classList.add(randomClass());
      span.classList.add(randomClass());
      paragraphLetter.appendChild(span);
    });
  }
};

const generateLetter = () => {
  const btn = document.querySelector('#criar-carta');
  btn.addEventListener('click', generateWords);
};

window.onload = function onload() {
  generateLetter();
};
