function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const colorBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

colorBtn.addEventListener('click', () => {
  const mainColor = getRandomHexColor();
  bodyEl.style.background = mainColor;
  colorEl.textContent = mainColor;
});