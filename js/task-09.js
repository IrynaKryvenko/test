const changeBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyPage = document.querySelector('body');

changeBtn.addEventListener('click', onChangeBtn);

function onChangeBtn() {
  const mainColor = getRandomHexColor();
  bodyPage.style.backgroundColor = mainColor;
  colorSpan.textContent = mainColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
