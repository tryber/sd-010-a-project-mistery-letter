const btnGenerateLetter = document.getElementById('criar-carta');

function generateWords() {
  const textInput = document.getElementById('carta-texto').value;
  const words = textInput.split(' ');
  return words;
}

function generateLetter() {
  const misteryousLetter = document.getElementById('carta-gerada');
  const words = generateWords();
  if (misteryousLetter.innerText !== '') {
    misteryousLetter.innerHTML = '';
  }
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    word.innerHTML = `${words[i]}`;
    misteryousLetter.appendChild(word);
  }
}

btnGenerateLetter.addEventListener('click', generateLetter);
