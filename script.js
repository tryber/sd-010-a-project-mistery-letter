const removeExistingWords = () => {
  const elements = document.querySelectorAll('span');
  if (elements.length > 0) {
    elements.forEach((element) => {
      element.remove();
    });
  }
};

const generateWords = () => {
  removeExistingWords();
  const arrayWord = document.querySelector('#carta-texto')
    .value.split(' ');
  arrayWord.forEach((word) => {
    const span = document.createElement('span');
    span.textContent = word;
    document.querySelector('#carta-gerada').appendChild(span);
  });
};

const generateLetter = () => {
  const btn = document.querySelector('#criar-carta');
  btn.addEventListener('click', generateWords);
};

window.onload = function onload() {
  generateLetter();
};
