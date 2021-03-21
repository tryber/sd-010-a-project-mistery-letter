const classnameTypes = {
  styles: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  inclination: ['skewleft', 'skewright'],
};

const myAddEventListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

/**
 * Retorna um valor aleatório entre min e max.
 *
 * @param {number} max Número máximo.
 * @param {number} min Número mínimo. Default = 0.
 * @returns Número inteiro aleatório entre min e max.
 * @version 0.1.1
 */
const randomNumber = (max, min = 0) =>
  Math.round(Math.random() * (Math.floor(max) - Math.floor(min)) + Math.floor(min));

const getRandomsStylesInObj = (objStyles, qtyStyles) => {
  const stylesWord = [];
  const savedStyles = [];
  let random;
  for (let index = 1; index <= qtyStyles; index += 1) {
    do {
      random = randomNumber(4, 1) - 1;
    } while (savedStyles.filter((x) => x === random).length > 0);
    savedStyles.push(random);
    // https://stackoverflow.com/questions/14802481/get-element-of-js-object-with-an-index
    const randomProp = objStyles[Object.keys(objStyles)[random]];
    const styleRandomProp = randomProp[randomNumber(randomProp.length - 1, 0)]; // string
    stylesWord.push(styleRandomProp);
  }
  return stylesWord;
};

const setStyleInElementAndText = (element, text) => {
  const elementNode = document.createElement(element);
  elementNode.textContent = text;
  const qtyStyles = randomNumber(4, 2);
  elementNode.className = getRandomsStylesInObj(classnameTypes, qtyStyles).join(' ');

  return elementNode;
};

const splitPhrase = (querySelector, elementNode) => {
  const elNode = elementNode;
  const inputPhrase = document.querySelector(querySelector);
  const text = inputPhrase.value.trim();
  if (text === '') {
    elNode.textContent = 'Por favor, digite o conteúdo da carta.';
    return false;
  }
  document.querySelector('#carta-contador').textContent = text.split(' ').length;
  return text.split(' ');
};

const generateMysteryLetter = (elementNode) => {
  const elNode = elementNode;
  if (!splitPhrase('#carta-texto', elementNode)) {
    return;
  }
  const arrayPhrase = splitPhrase('#carta-texto');
  elNode.innerHTML = '';

  for (let index = 0; index < arrayPhrase.length; index += 1) {
    elNode.appendChild(setStyleInElementAndText('span', arrayPhrase[index]));
  }
};

window.onload = () => {
  const cartaGeradaId = document.querySelector('#carta-gerada');
  myAddEventListener('#criar-carta', 'click', () => { generateMysteryLetter(cartaGeradaId); });
};
