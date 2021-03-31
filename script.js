const inputText = document.querySelector('#carta-texto');
const btnText = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');
const styles = ['newspaper', 'magazine1', 'magazine2'];
const sizes = ['medium', 'big', 'reallybig'];
const rotations = ['rotateleft', 'rotateright'];
const inclinations = ['skewleft', 'skewright'];
const count = document.querySelector('#carta-contador');
const setClassToSpan = (element) => {
  const style = styles[(Math.floor(Math.random() * styles.length))];
  const size = sizes[(Math.floor(Math.random() * sizes.length))];
  const rotation = rotations[(Math.floor(Math.random() * rotations.length))];
  const inclination = inclinations[(Math.floor(Math.random() * inclinations.length))];
  element.classList.add(style, size, rotation, inclination);
};

const appendSpan = (text, boolean) => {
  const span = document.createElement('span');
  let contador = 0;
  span.innerText = text;
  if (boolean) {
    setClassToSpan(span);
    contador += 1;
  }
    letter.appendChild(span);
};

btnText.addEventListener('click', () => {
  const text = inputText.value;
  letter.innerText = '';
  let textArray = [];
  if (text.length === 0) appendSpan('Por favor, digite o conteúdo da carta.', false);
  else textArray = text.split(' ');
  textArray.forEach((element) => appendSpan(element, true));
  const spans = document.querySelectorAll('span');
  count.innerText = spans.length;
});
