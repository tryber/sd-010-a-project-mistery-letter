const tagP = document.getElementById('carta-gerada');
const button = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto').value;

button.addEventListener('click', () => {
  const words = inputLetter.split(' ');
  console.log(words);
  const spans = document.createElement('span');
});
