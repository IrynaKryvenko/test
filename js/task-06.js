const validation = document.querySelector('#validation-input');

validation.addEventListener('blur', onValidationCheck);

function onValidationCheck(event) {
    validation.classList.remove(`invalid`, `valid`);
    if (event.currentTarget.value.length === Number(validation.dataset.length)) {
        validation.classList.replace(`valid`);
    } else {
        validation.classList.add(`invalid`);
    }
}