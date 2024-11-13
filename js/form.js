
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


(function () {
    'use strict'

    var form = document.getElementById('contactForm')

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            alert('Form submitted successfully!')
        }

        form.classList.add('was-validated')
    }, false)

    var emailInput = document.getElementById('email')
    emailInput.addEventListener('input', function () {
        if (emailInput.value.length < 8) {
            emailInput.setCustomValidity('Email must be at least 8 characters long')
        } else {
            emailInput.setCustomValidity('')
        }
    })
})()














