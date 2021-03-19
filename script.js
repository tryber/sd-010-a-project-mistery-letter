function createLetter() {
  const letterInputElement = document.getElementById('carta-texto');
  const letterElement = document.getElementById('carta-gerada');

  const letterContent = letterInputElement.value;
  const letterContentArray = letterContent.split(' ');

  letterContent.value = '';

  for (let index = 0; index < letterContentArray.length; index += 1) {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `${letterContentArray[index]} `;

    letterElement.appendChild(spanElement);
  }
}

window.onload = () => {
  const createLetterButtonElement = document.getElementById('criar-carta');

  createLetterButtonElement.onclick = createLetter;
};
