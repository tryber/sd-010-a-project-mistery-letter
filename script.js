const buttonGenLetter = document.getElementById('criar-carta');
const inputElement = document.getElementById('carta-texto');
const pElement = document.getElementById('carta-gerada');

function generateLetter() {
    const inputEl = inputElement;
    const pEl = pElement;
    const letterWords = inputEl.value.split(' ');

    if (inputEl.value !== '') {
        for (let i = 0; i < letterWords.length; i += 1) {
            const spanEl = document.createElement('span');
            const word = letterWords[i];

            if (word !== '') {
                spanEl.innerText = letterWords[i];
                pEl.appendChild(spanEl);
            }
        }
    }
}

buttonGenLetter.addEventListener('click', generateLetter);
