const reviews = [
    {
        "name": "Aksh I",
        "image": "/img/google/aksh.png",
        "star": 5,
        "date": "a month ago",
        "review": "Rahul was struggling with speech and behaviour issues. Joining AILC REALLY helped us in giving very positive results! We are delighted and grateful to team members of Adhyyan Inclusive Learning Centre."
    },
    {
        "name": "kalpana vogeti",
        "image": "/img/google/kalpana.png",
        "star": 5,
        "date": "3 months ago",
        "review": "A place like home away from home. Warm and enthusiastic staff that embraces kids with motherly affection - a much needed solace for a child with special needs. No judgements, just patience and love."
    },
    {
        "name": "ashu prajapati",
        "image": "/img/google/ashu.png",
        "star": 5,
        "date": "5 months ago",
        "review": "The autism treatment at Adhyayan Inclusive Learning Centre has been outstanding. The therapists genuinely care about my child's progress, and we've seen significant improvements."
    },
    {
        "name": "krishavraj chanduk",
        "image": "/img/google/3.png",
        "star": 5,
        "date": "5 months ago",
        "review": "AILC is the best Autism Spectrum Disorder centre. From the initial days, the transformation has been remarkable. Thanks to the dedicated team!"
    },
    {
        "name": "surbhi manchanda",
        "image": "/img/google/4.png",
        "star": 5,
        "date": "5 months ago",
        "review": "AILC Special School is undoubtedly the best dyslexia center in Delhi. The team's dedication and innovative teaching methods are commendable."
    },
    {
        "name": "Aashu Tiwari",
        "image": "/img/google/aashu.png",
        "star": 5,
        "date": "a month ago",
        "review": "Our hardships handling ABA THERAPY needs have been greatly supported by AILC. The staff acts with full responsibility and compassion."
    },

    {
        "name": "Shivani Sharma",
        "image": "/img/google/shiwani.png",
        "star": 4,
        "date": "6 months ago",
        "review": "One of the best Autism and Dyslexia training centres. The team really helped our child with speech delay and behavior modification."
    },
    {
        "name": "Kalpana Pradhan",
        "image": "/img/google/kalpana.png",
        "star": 5,
        "date": "6 months ago",
        "review": "If you want to help your child with Autism, just join AILC! The guidance is exceptional, and they truly care about making a positive change."
    },
    {
        "name": "Vishal Adhikari",
        "image": "/img/google/vishal.png",
        "star": 5,
        "date": "5 months ago",
        "review": "The autism services here have been a game-changer for our family. The therapists are patient and truly understand our child's needs. We've seen significant improvement in social skills and behavior. The personalized approach and constant communication make a huge difference. We're extremely grateful for this team."
    },

    {
        "name": "Z A I D K H A N",
        "image": "/img/google/zaidkhand.png",
        "star": 5,
        "date": "5 months ago",
        "review": "Our experience with the occupational therapists at Adhyayan Inclusive Learning Centre has been fantastic. They are attentive, patient, and innovative in their approach. My child's motor skills and daily living activities have improved significantly. The therapists truly understand individual needs, making sessions both productive and enjoyable. Highly recommend"
    },
    {
        "name": "",
        "image": "",
        "star": 5,
        "date": "",
        "review": ""
    },
    {
        "name": "",
        "image": "",
        "star": 5,
        "date": "",
        "review": ""
    },
    {
        "name": "",
        "image": "",
        "star": 5,
        "date": "",
        "review": ""
    },
]










function renderReviews() {
    const container = document.getElementById("testimonial-carousel");

    reviews.forEach((review) => {
        // Create the card container
        const card = document.createElement("div");
        card.classList.add("testimonial-card", "item"); // 'item' class for Owl Carousel

        // Star rating
        const starsDiv = document.createElement("div");
        starsDiv.classList.add("stars");
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("i");
            star.classList.add("bi", "bi-star-fill");
            if (i <= review.star) {
                star.style.color = "#ff6200"; // Highlight star
            }
            starsDiv.appendChild(star);
        }

        // Profile and details
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("d-flex", "flex-column", "gap-2");

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("d-flex", "gap-2");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("crouser-img");

        const img = document.createElement("img");
        img.src = review.image;
        img.alt = `${review.name} Image`;
        imgDiv.appendChild(img);

        const textDiv = document.createElement("div");
        textDiv.classList.add("d-flex", "flex-column", "gap-2");

        const name = document.createElement("h5");
        name.textContent = review.name;

        const date = document.createElement("small");
        date.textContent = review.date;

        const reviewText = document.createElement("p");
        reviewText.classList.add("reviews");
        reviewText.textContent = review.review;
        textDiv.appendChild(name);
        textDiv.appendChild(date);
        infoDiv.appendChild(imgDiv);
        infoDiv.appendChild(textDiv);
        profileDiv.appendChild(infoDiv);
        profileDiv.appendChild(reviewText);

        card.appendChild(starsDiv);
        card.appendChild(profileDiv);
        container.appendChild(card);
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

}

document.addEventListener("DOMContentLoaded", function () {
    renderReviews();
});
