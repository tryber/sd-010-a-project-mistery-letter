const inputText = document.querySelector('#carta-texto');
const btnText = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');
const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotations = ['rotateleft', 'rotateright'];
const inclinations = ['skewleft', 'skewright'];

const setClassToSpan = (element) => {
  console.log('entrou');
  const style = styles[(Math.floor(Math.random() * styles.length))];
  const size = sizes[(Math.floor(Math.random() * sizes.length))];
  const rotation = rotations[(Math.floor(Math.random() * rotations.length))];
  const inclination = inclinations[(Math.floor(Math.random() * inclinations.length))];
  element.classList.add(style, size, rotation, inclination);
};

const appendSpan = (text, boolean) => {
  const span = document.createElement('span');
  span.innerText = text;
  if (boolean) setClassToSpan(span);
  letter.appendChild(span);
};

btnText.addEventListener('click', () => {
  const text = inputText.value;
  letter.innerText = '';
  let textArray = [];
  if (text.length === 0) appendSpan('Por favor, digite o conteúdo da carta.', false);
  else textArray = text.split(' ');
  textArray.forEach((element) => appendSpan(element, true));
});
