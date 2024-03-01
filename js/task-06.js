const validationRef = document.querySelector('#validation-input');

validationRef.addEventListener('blur', onValidationCheck);

function onValidationCheck(event) {
    validationRef.classList.add('invalid');
    if (event.currentTarget.value.length === Number(validationRef.dataset.length)) {
        validationRef.classList.replace('invalid', 'valid');
    } else {
        validationRef.classList.remove('valid'); // Додано видалення класу 'valid', якщо відбулася зміна
    }
}
