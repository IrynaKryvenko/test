const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === "" || password.value === "") {
        return alert("All fields must be filled in");
    }

    const formData = {
        email: email.value,
        password: password.value,
    }

       console.log(formData);

    event.currentTarget.reset();
}
