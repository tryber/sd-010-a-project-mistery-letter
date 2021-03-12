const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const weightGroup = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function createLetter() {
  const message = document.getElementById('carta-texto');
  const letter = document.getElementById('carta-gerada');
  const helper = message.value.split(' ');
  if (!message.value || message.value.replace(/\s/g, '') === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter.innerText = '';
    for (let index = 0; index < helper.length; index += 1) {
      const span = document.createElement('span');
      span.id = 'span';
      span.innerText = helper[index];
      letter.appendChild(span);
    }
  }
}

function generateClasses() {
  const spans = document.querySelectorAll('#carta-gerada #span');

  for (let i = 0; i < spans.length; i += 1) {
    const indexRandom1 = Math.floor(Math.random() * 3);
    const indexRandom2 = Math.floor(Math.random() * 3);
    const indexRandom3 = Math.floor(Math.random() * 2);
    const indexRandom4 = Math.floor(Math.random() * 2);
    spans[i].classList.add(styleGroup[indexRandom1]);
    spans[i].classList.add(weightGroup[indexRandom2]);
    spans[i].classList.add(rotate[indexRandom3]);
    spans[i].classList.add(skew[indexRandom4]);
  }
}

function createCount() {
  const count = document.querySelector('#carta-contador');
  const spans = document.querySelectorAll('#span');

  count.innerText = `${spans.length}`;
}

function createBtn() {
  const createBtnInput = document.getElementById('criar-carta');
  createBtnInput.addEventListener('click', () => {
    createLetter();
    generateClasses();
    createCount();
  });
}

window.onload = () => {
  createBtn();
};
