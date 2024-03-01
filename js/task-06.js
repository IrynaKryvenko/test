const validationRef = document.querySelector('#validation-input');

validationRef.addEventListener('blur', onValidationCheck);
function onValidationCheck (event) {
    validationRef.classList.add(`invalid`);
    if (event.currentTarget.value.length === Number(validationRef.dataset.length)) {
        validationRef.classList.replace(`invalid`, `valid`);
    }
}