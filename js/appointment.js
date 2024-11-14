document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const services = document.getElementById("services");
    const date = document.getElementById("date");
    let isFormValid = true;

    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isFormValid = false;
    } else {
        name.classList.remove("is-invalid");
    }

    if (email.value.trim() === "") {
        email.classList.add("is-invalid");
        isFormValid = false;
    } else if (!validateEmail(email.value)) {
        email.classList.add("is-invalid");
        email.nextElementSibling.textContent = "Please enter a valid email address.";
        isFormValid = false;
    } else {
        email.classList.remove("is-invalid");
    }

    if (services.value === "") {
        services.classList.add("is-invalid");
        isFormValid = false;
    } else {
        services.classList.remove("is-invalid");
    }

    if (date.value === "") {
        date.classList.add("is-invalid");
        isFormValid = false;
    } else {
        date.classList.remove("is-invalid");
    }

    if (isFormValid) {
        document.getElementById("appointmentForm").submit();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}