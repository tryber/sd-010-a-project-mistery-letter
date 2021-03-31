const inputText = document.querySelector('#carta-texto');
const btnText = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');
btnText.addEventListener('click', () => {
  const text = inputText.value;
  const textArray = text.split(' ');
  textArray.forEach((element) => {
    const span = document.createElement('span');
    span.innerText = element;
    letter.appendChild(span);
  });
});
