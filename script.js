function getClasses() {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const skew = ['skewleft', 'skewright'];
  const classes = [style, size, rotation, skew];

  return classes.reduce((classList, classe, index) => {
    const firstRandom = Math.floor(Math.random() * 4);
    const secondRandom = Math.floor(Math.random() * 3);
    const randomIndex = index >= 2 ? firstRandom : secondRandom;
    const list = classList;

    if (classe[randomIndex]) list.push(classe[randomIndex]);
    return list;
  }, []).join(' ');
}

function createSpanLetter(text) {
  const span = document.createElement('span');
  span.innerText = text;
  span.className = getClasses();

  return span;
}

function wordCount(number) {
  const count = document.querySelector('#carta-contador');

  count.innerText = number;
}

function setLetter() {
  const error = 'Por favor, digite o conteúdo da carta.';
  const input = document.querySelector('#carta-texto').value.split(' ');
  const letter = document.querySelector('#carta-gerada');
  const inputFiltered = input.filter((text) => text !== '');

  letter.innerText = '';
  letter.parentElement.style.padding = '20px';

  if (!inputFiltered.length) return letter.appendChild(createSpanLetter(error));

  inputFiltered.forEach((text, index) => {
    const word = createSpanLetter(text);

    letter.appendChild(word);
    if (inputFiltered.length === index + 1) letter.innerHTML += '';
    else letter.innerHTML += ' ';
  });
  wordCount(inputFiltered.length);
}

function getEvents() {
  const button = document.querySelector('#criar-carta');

  button.addEventListener('click', setLetter);
}

window.onload = () => {
  getEvents();
};
