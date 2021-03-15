const btnGenerateLetter = document.getElementById('criar-carta');
const inputText = document.getElementById('carta-texto');
const misteryousLetter = document.getElementById('carta-gerada');

function generateWords() {
  const textInput = document.getElementById('carta-texto').value;
  const words = textInput.split(' ');
  return words;
}

function checkEmpty() {
  if (inputText.value === '' || !inputText.value.replace(/\s/g, '').length) {
    misteryousLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function generateLetter() {
  const words = generateWords();
  if (misteryousLetter.innerText !== '') {
    misteryousLetter.innerHTML = '';
  }
  checkEmpty();
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    word.innerHTML = `${words[i]}`;
    misteryousLetter.appendChild(word);
  }
}

btnGenerateLetter.addEventListener('click', generateLetter);
