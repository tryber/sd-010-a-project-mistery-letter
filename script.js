const generate = document.getElementById('criar-carta');
const text = document.getElementById('carta-texto');
const result = document.querySelector('#carta-gerada');
const counterP = document.querySelector('#carta-contador');
const classArray = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig',
  'rotateleft', 'rotateright', 'skewleft', 'skewright'];

const inputArr = text.value.split(' ');
let wordAmount = inputArr.length;

function countWords() {
  counterP.innerText = wordAmount;
}

countWords();

const letter = () => {
  let resultTxt = '';
  if (inputArr !== '') {
    inputArr.forEach((word) => {
      resultTxt += `<span>${word}</span>`;
    });
  }
  if (resultTxt === '') {
    resultTxt = 'Por favor, digite o conteúdo da carta.';
    wordAmount = 0;
  }
  result.innerHTML = resultTxt;
  return result.innerHTML;
};

generate.addEventListener('click', (event) => {
  event.preventDefault();
  letter();
});
