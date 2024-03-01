const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtn);
destroyBtn.addEventListener('click', onDestroyBtn);

function onCreateBtn(event) {
  const amount = input.value;
  const initialBoxSize = 30;
  let markUp = '';
  
  for (let i = 0; i < amount; i += 1){
    const size = initialBoxSize + i * 10;
    const colorBox = getRandomHexColor();
    markUp += `<div style='width:${size}px; height:${size}px; background-color:${colorBox};'>`;

  }

  boxContainer.innerHTML = markUp;

}

function onDestroyBtn(event) {
  boxContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
