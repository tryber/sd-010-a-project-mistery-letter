const input = document.querySelector('#carta-texto');
const buttonGenerate = document.querySelector('#criar-carta');
const showResult = document.querySelector('#carta-gerada');
const idCartaContador = document.querySelector('#carta-contador');
const spans = document.getElementsByTagName('span');

const grupo1 = ['newspaper', 'magazine1', 'magazine2'];
const grupo2 = ['medium', 'big', 'reallybig'];
const grupo3 = ['rotateleft', 'rotateright'];
const grupo4 = ['skewleft', 'skewright'];

// https://github.com/tryber/sd-010-a-project-mistery-letter/pull/7/files
// As duas funções abaixo foram baseadas na ideia do Lucas André, conforme link acima
const generateClass = (e) => {
  const gp1 = Math.floor(Math.random() * 3);
  const gp2 = Math.floor(Math.random() * 3);
  const gp3 = Math.floor(Math.random() * 2);
  const gp4 = Math.floor(Math.random() * 2);
  e.target.className = `${grupo1[gp1]} ${grupo2[gp2]} ${grupo3[gp3]} ${grupo4[gp4]}`;
};

const generateClassAlternative = () => {
  for (let index = 0; index < spans.length; index += 1) {
    const gp1 = Math.floor(Math.random() * 3);
    const gp2 = Math.floor(Math.random() * 3);
    const gp3 = Math.floor(Math.random() * 2);
    const gp4 = Math.floor(Math.random() * 2);
    spans[index].className = `${grupo1[gp1]} ${grupo2[gp2]} ${grupo3[gp3]} ${grupo4[gp4]}`;
  }
};

const generate = () => {
  showResult.innerHTML = '';
  // https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
  // Achei a função .trim() no link acima
  if (input.value === '' || !input.value.trim()) {
    showResult.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const inputSplited = input.value.split(' ');
  for (let index = 0; index < inputSplited.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerHTML = inputSplited[index];
    newSpan.addEventListener('click', generateClass);
    showResult.appendChild(newSpan);
  }
  idCartaContador.innerHTML = inputSplited.length;
  generateClassAlternative();
};

window.onload = () => {
  buttonGenerate.addEventListener('click', generate);
};
