const character = document.getElementsByTagName('span')[0];
const input = document.getElementsByTagName('input')[0];
console.log(character);
console.log(input);

input.addEventListener('input', (event) => {
  character.textContent = event.target.value;
  if (!input.value) {
    character.textContent = 'Alice';
  }
});
