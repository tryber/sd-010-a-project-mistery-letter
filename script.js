const tagP = document.getElementById('carta-gerada');
const button = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');

function ifThis() {
  const put = inputLetter.value;
  let counter = 0;
  if (!put) {
    tagP.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return tagP;
  }
  for (let index = 0; index < put.length; index += 1) {
    if (put[index] !== ' ') counter += 1;
  }
  if (counter === 0) {
    tagP.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return tagP;
  }
}

button.addEventListener('click', () => {
  tagP.innerHTML = '';
  let words = inputLetter.value.split(' ');
  words = words.filter((x) => x !== '');
  console.log(words);
  for (let index = 0; index < words.length; index += 1) {
    const spans = document.createElement('span');
    spans.innerHTML = words[index];
    tagP.appendChild(spans);
  }
  return ifThis();
});
