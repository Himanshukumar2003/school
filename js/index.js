// Function to enable hover dropdowns on desktop only
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 992) { // Adjust based on the Bootstrap breakpoint (lg: 992px)
        // Select all dropdowns
        const dropdowns = document.querySelectorAll('.navbar .dropdown');

        dropdowns.forEach(dropdown => {
            // Show dropdown on hover
            dropdown.addEventListener('mouseover', function () {
                const dropdownMenu = this.querySelector('.dropdown-menu');
                dropdownMenu.classList.add('show');
            });

            // Hide dropdown when not hovered
            dropdown.addEventListener('mouseleave', function () {
                const dropdownMenu = this.querySelector('.dropdown-menu');
                dropdownMenu.classList.remove('show');
            });
        });
    }
});


function toggleNavbar() {
    const navbarNav = document.querySelector('.menu-item');
    navbarNav.classList.toggle('active');
}




$(document).ready(function () {
    $(".school-carousel-two").owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        responsive: {
            0: { items: 2 },
            768: { items: 4 },
            1000: {
                items: 5
            }
        }
    });
});






document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const services = document.getElementById("services");
    const date = document.getElementById("date");

    let isFormValid = true;

    // Validate name
    if (name.value.trim() === "") {
        name.classList.add("is-invalid");
        isFormValid = false;
    } else {
        name.classList.remove("is-invalid");
    }

    // Validate email
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

    // Validate services
    if (services.value === "") {
        services.classList.add("is-invalid");
        isFormValid = false;
    } else {
        services.classList.remove("is-invalid");
    }

    // Validate date
    if (date.value === "") {
        date.classList.add("is-invalid");
        isFormValid = false;
    } else {
        date.classList.remove("is-invalid");
    }

    // If form is invalid, prevent submission
    if (!isFormValid) {
        event.preventDefault();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}







document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    function revealCards() {
        const windowHeight = window.innerHeight;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 100) { // Adjust trigger point as needed
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Trigger on load in case some cards are already in view
});


document.addEventListener("DOMContentLoaded", function () {
    // Select all progress items
    const progressItems = document.querySelectorAll(".progress-item");

    progressItems.forEach(item => {
        const bar = item.querySelector(".progress-bar");
        const label = item.querySelector(".progress-label");
        const target = parseInt(bar.getAttribute("data-progress"), 10);

        bar.style.width = target + "%";

        let count = 0;
        const interval = setInterval(() => {
            if (count < target) {
                count++;
                label.textContent = count + "%";
                label.style.left = `calc(${count}% - 15px)`;
            } else {
                clearInterval(interval);
            }
        }, 15);
    });
});




$(document).ready(function () {
    $("#testimonial-carousel").owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true, // Enable dots
        nav: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 }
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.scale-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const img = entry.target;
                const delay = img.getAttribute('data-delay');

                setTimeout(() => {
                    img.style.transform = 'scale(1)';
                    img.style.opacity = '1';
                    img.classList.add('animated'); // Mark as animated to prevent re-triggering
                }, delay);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the image is visible

    images.forEach(img => observer.observe(img));
});
