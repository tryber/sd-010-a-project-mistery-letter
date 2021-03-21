const selectButton = document.querySelector('#criar-carta');
const selectInput = document.querySelector('#carta-texto');
const selectP = document.querySelector('#carta-gerada');
const selectContador = document.querySelector('#carta-contador');
const styles = ['newspaper', 'magazine1', 'magazine2'];
const lengths = ['medium', 'big', 'reallybig'];
const rotates = ['rotateleft', 'rotateright'];
const Skews = ['skewleft', 'skewright'];

function addStyle() {
  const randomStyles = Math.floor(Math.random() * styles.length);
  const newStyle = styles[randomStyles];
  return newStyle;
}

function addleght() {
  const randomLenghts = Math.floor(Math.random() * lengths.length);
  const newLenght = lengths[randomLenghts];
  return newLenght;
}

function addRotate() {
  const randomRotates = Math.floor(Math.random() * rotates.length);
  const newRotate = rotates[randomRotates];
  return newRotate;
}

function addSkew() {
  const randomSkews = Math.floor(Math.random() * Skews.length);
  const newSkew = Skews[randomSkews];
  return newSkew;
}

function generateLetter() {
  selectP.innerHTML = '';
  const inputSplited = selectInput.value.split(' ');
  if (selectInput.value === '' || !selectInput.value.trim()) { // consulta do método trim() em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    selectP.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < inputSplited.length; index += 1) {
      const createSpan = document.createElement('span');
      selectContador.innerHTML = inputSplited.length;
      createSpan.innerHTML = inputSplited[index];
      createSpan.style.display = 'inline-block';
      createSpan.classList.add(`${addStyle()}`);
      createSpan.classList.add(`${addleght()}`);
      createSpan.classList.add(`${addRotate()}`);
      createSpan.classList.add(`${addSkew()}`);
      selectP.appendChild(createSpan);
    }
  }
}

selectButton.addEventListener('click', generateLetter);
