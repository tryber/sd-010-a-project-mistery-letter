// Estilo aleatório
function randomizeStyles() {
  const arrStyles = ['newspaper', 'magazine1', 'magazine2'];
  const randomStyles = Math.floor(Math.random() * arrStyles.length);
  return randomStyles;
}
function addStyle() {
  const arrStyles = ['newspaper', 'magazine1', 'magazine2'];
  const newStyle = arrStyles[randomizeStyles()];
  return newStyle;
}

// Inclinação aleatória
function randomizeIncline() {
  const arrIncline = ['skewleft', 'skewright'];
  const randomIncline = Math.floor(Math.random() * arrIncline.length);
  return randomIncline;
}
function addIncline() {
  const arrIncline = ['skewleft', 'skewright'];
  const newIncline = arrIncline[randomizeIncline()];
  return newIncline;
}

// Rotação aleatória
function randomizeRotation() {
  const arrRotate = ['rotateleft', 'rotateright'];
  const randomRotation = Math.floor(Math.random() * arrRotate.length);
  return randomRotation;
}
function addRotation() {
  const arrRotate = ['rotateleft', 'rotateright'];
  const newRotation = arrRotate[randomizeRotation()];
  return newRotation;
}

// Tamanho aleatório
function randomizeSizes() {
  const arrSizes = ['medium', 'big', 'reallybig'];
  const randomSizes = Math.floor(Math.random() * arrSizes.length);
  return randomSizes;
}
function addSize() {
  const arrSizes = ['medium', 'big', 'reallybig'];
  const newSize = arrSizes[randomizeSizes()];
  return newSize;
}

const cartaGerada = document.getElementById('carta-gerada');

function createLetter() {
  const input = document.getElementById('carta-texto');
  const inputValue = input.value;
  const newArray = inputValue.split(' ');
  if (input.value === '' || input.value === ' ') {
    cartaGerada.textContent = 'Por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.innerText = '';
    for (let key = 0; key < newArray.length; key += 1) {
      const newElement = document.createElement('span');
      newElement.textContent = newArray[key];
      newElement.classList.add(`${addStyle()}`);
      newElement.classList.add(`${addIncline()}`);
      newElement.classList.add(`${addRotation()}`);
      newElement.classList.add(`${addSize()}`);
      cartaGerada.appendChild(newElement);
    }
  }
}
const btnAddLetter = document.getElementById('criar-carta');
btnAddLetter.addEventListener('click', createLetter);

// Para a função generateNewStyles, tomei como base o código do colega Wanderson Sales

function generateNewStyles() {
  const spanElements = document.getElementsByTagName('span');
  for (let i = 0; i < spanElements.length; i += 1) {
    const styleOne = addSize();
    const styleTwo = addIncline();
    const styleThree = addRotation();
    const styleFour = addStyle();
    spanElements[i].className = `${styleOne} ${styleTwo} ${styleThree} ${styleFour}`;
  }
}

cartaGerada.addEventListener('click', generateNewStyles);

// Contador de palavras - com base na solução proposta pelo colega Lucas André
btnAddLetter.addEventListener('click', () => {
  const spans = document.getElementsByTagName('span');
  const count = document.getElementById('carta-contador');
  count.textContent = spans.length;
});

/* Consultei o código do colega Murilo Gonçalves para reestruturar a função que gera as cartas (createLetter):
https://github.com/tryber/sd-010-a-project-mistery-letter/pull/11/files
Observar o raciocínio do colega me ajudou a entender onde eu estava errando e porque meu código
 gerava uma tag span para frases inteiras (ao invés de uma por palavra);

 Consultei código do colega Patrick Morais para corrigir erro nas linhas 57 e 58 da função createLetter (que não apagava a msg de alerta):
 https://github.com/tryber/sd-010-a-project-mistery-letter/pull/6/files

- Link para o pull request do colega Wanderson Sales:
https://github.com/tryber/sd-010-a-project-mistery-letter/pull/8/files

- Link para o pull request do colega Lucas André:
https://github.com/tryber/sd-010-a-project-mistery-letter/pull/7/files

 Além disso, consultei tbm as seguintes referências:
--> https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/ (para gerar estilos aleatórios)
--> https://www.w3schools.com/cssref/pr_background-image.asp (para entender como funciona a propriedade background-image)
 */
