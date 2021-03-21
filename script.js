const tagP = document.getElementById('carta-gerada');
const button = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');

button.addEventListener('click', () => {
  let words = inputLetter.value.split(' ');
  words = words.filter(x => x !== '');
  console.log(words);
  for (let index = 0; index < words.length; index += 1) {
    const spans = document.createElement('span');
    spans.innerHTML = words[index];
    tagP.appendChild(spans);
  }
});
