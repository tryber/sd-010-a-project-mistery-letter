const generate = document.getElementById('criar-carta');
const text = document.querySelector('#carta-texto');
const result = document.querySelector('#carta-gerada');
const counterP = document.querySelector('#carta-contador');
const classArray = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig',
  'rotateleft', 'rotateright', 'skewleft', 'skewright'];

const inputArr = text.value.split(' ');
function countWords() {
  const wordAmount = inputArr.length;
  counterP.innerText = wordAmount - 1;
}

countWords();

let resultTxt = '';

const firstStep = () => {
  if (inputArr !== '') {
    inputArr.map((word) => {
      resultTxt += `<span>${word}</span>`;
      return resultTxt;
    });
  }
  if (resultTxt === '') {
    resultTxt = 'Por favor, digite o conteúdo da carta.';
  }
  return console.log(resultTxt);
};

const letter = () => {
  countWords();
  firstStep();
  letter();
  generate.addEventListener('click', (event) => {
    event.preventDefault();
    result.innerHTML = resultTxt;
  });
};

letter();
