const sizeControl = document.querySelector('#font-size-control');
const textControl = document.querySelector('#text');

sizeControl.addEventListener(`input`, onSizeControl);
textControl.style.fontSize = `${sizeControl.value}px`;

function onSizeControl(event) {
    textControl.style.fontSize = event.currentTarget.value + 'px';
}