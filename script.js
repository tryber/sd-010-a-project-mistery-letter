// Bloco de declaração de variáveis globais

const letterText = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');
const createButton = document.getElementById('criar-carta');
const contWords = document.getElementById('carta-contador');

// Bloco de declaração de funções

function randonClasses() {
  let classes = '';
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['', ' medium', ' big', ' reallybig'];
  const rotetion = ['', ' rotateleft', ' rotateright'];
  const inclination = ['', ' skewleft', ' skewright'];
  classes += style[Math.round(Math.random() * 2)];
  classes += size[Math.round(Math.random() * 3)];
  classes += rotetion[Math.round(Math.random() * 2)];
  classes += inclination[Math.round(Math.random() * 2)];
  return classes;
}

function changeStyle(event) {
  const wordToChanged = event.target;
  wordToChanged.className = randonClasses();
}

function createLetter() {
  let content = letterText.value.match(/\w+/g);
  if (content === null) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter.innerHTML = '';
    content = letterText.value.split(/[\t\s\n]/i);
    for (let index = 0; index < content.length; index += 1) {
      if (content[index] !== '') {
        const word = document.createElement('span');
        word.innerText = content[index];
        word.addEventListener('click', changeStyle);
        word.className = randonClasses();
        letter.appendChild(word);
      } 
    }
    contWords.innerText = content.length;
  }
}

// BLoco de criação de escutadores de eventos

createButton.addEventListener('click', createLetter);

// de ações de inicialização

contWords.innerText = '0';
