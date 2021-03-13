function generateLetter() {
  const str = document.getElementById('carta-texto').value;
  const arr = str.split(' ');
  for (let index = 0; index <= arr.length; index += 1) {
    const tagSpan = document.createElement('span');
    tagSpan.innerText = arr[index];
    document.getElementById('carta-gerada').appendChild(tagSpan);
  }
}

document.getElementById('criar-carta').addEventListener('click', generateLetter);
