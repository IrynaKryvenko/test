const validation = document.querySelector('#validation-input');

validation.addEventListener('blur', onValidationCheck);

function onValidationCheck(event) {
    validation.classList.add(`invalid`);
    if (event.currentTarget.value.length === Number(validation.dataset.length)) {
        validation.classList.add(`valid`);
    } else {
        validation.classList.add(`invalid`);
    }
}