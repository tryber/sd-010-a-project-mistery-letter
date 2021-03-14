const getInput = document.getElementById('carta-texto');
let phrase = '';
getInput.addEventListener('keyup', (event) => {
  phrase += event.key;
  getInput.innerText += phrase;
});

const getBtn = document.getElementById('criar-carta');
getBtn.addEventListener('click', () => {
  const getLetter = document.getElementById('carta-texto').value;
  const arrayLetter = getLetter.split(' ');
  for (let index = 0; index < arrayLetter.length; index += 1) {
    const makeSpan = document.createElement('span');
    document.getElementById('container').appendChild(makeSpan);
    document.querySelectorAll('span')[index].innerText = `${arrayLetter[index]} `;
  }
});
