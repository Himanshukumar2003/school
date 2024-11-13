document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    function revealCards() {
        const windowHeight = window.innerHeight;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 100) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Trigger on load in case some cards are already in view
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 600,  // Animation duration
        once: true,      // Animation happens only once
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            if (window.innerWidth < 992) {  // MD breakpoint for Bootstrap
                event.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('show');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {

        if (currentPath.includes(link.getAttribute("href"))) {
            link.classList.add("active-link");
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
    $(".news-crouser").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});



// Email validation function





