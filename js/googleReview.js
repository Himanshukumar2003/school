const reviews = [
    {
        "name": "Aksh I",
        "image": "/img/google/aksh.png",
        "star": 5,
        "date": "a month ago",
        "link": "https://www.google.com/maps/contrib/114166495174278025779/reviews/@28.5702755,77.2198553,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "review": "Rahul was struggling with speech and behaviour issues. Joining AILC REALLY helped us in giving very positive results! We are delighted and grateful to team members of Adhyyan Inclusive Learning Centre."
    },
    {
        "name": "kalpana vogeti",
        "image": "/img/google/kalpana.png",
        "star": 5,
        "date": "3 months ago",
        "link": "https://www.google.com/maps/contrib/111937486809121027181/reviews?hl=en-GB",
        "review": "A place like home away from home. Warm and enthusiastic staff that embraces kids with motherly affection - a much needed solace for a child with special needs. No judgements, just patience and love."
    },
    {
        "name": "ashu prajapati",
        "image": "/img/google/ashu.png",
        "star": 5,
        "date": "5 months ago",
        "link": "https://www.google.com/maps/contrib/116665149181559105742/reviews/@28.4479683,77.2834525,11z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "review": "The autism treatment at Adhyayan Inclusive Learning Centre has been outstanding. The therapists genuinely care about my child's progress, and we've seen significant improvements."
    },
    {
        "name": "krishavraj chanduk",
        "image": "/img/google/3.png",
        "star": 5,
        "date": "5 months ago",
        "link": "https://www.google.com/maps/contrib/108258870460844681409/reviews/@28.5676556,77.2456505,14z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "review": "AILC is the best Autism Spectrum Disorder centre. From the initial days, the transformation has been remarkable. Thanks to the dedicated team!"
    },
    {
        "name": "surbhi manchanda",
        "image": "/img/google/4.png",
        "star": 5,
        "link": "https://www.google.com/maps/contrib/109157003968183562032/reviews/@28.6399678,77.1712338,12z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "5 months ago",
        "review": "AILC Special School is undoubtedly the best dyslexia center in Delhi. The team's dedication and innovative teaching methods are commendable."
    },
    {
        "name": "Aashu Tiwari",
        "image": "/img/google/aashu.png",
        "star": 5,
        "link": "https://www.google.com/maps/contrib/113740110366265191502/reviews/@28.4941604,77.2039202,11z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "a month ago",
        "review": "Our hardships handling ABA THERAPY needs have been greatly supported by AILC. The staff acts with full responsibility and compassion."
    },

    {
        "name": "Shivani Sharma",
        "image": "/img/google/shiwani.png",
        "star": 4,
        "link": "https://www.google.com/maps/contrib/105372342382432235571/reviews/@28.5702755,77.2198553,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "6 months ago",
        "review": "One of the best Autism and Dyslexia training centres. The team really helped our child with speech delay and behavior modification."
    },
    {
        "name": "Kalpana Pradhan",
        "image": "/img/google/kalpana.png",
        "star": 5,
        "link": "https://www.google.com/maps/contrib/116006969617808820129/reviews/@28.5702755,77.2198553,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "6 months ago",
        "review": "If you want to help your child with Autism, just join AILC! The guidance is exceptional, and they truly care about making a positive change."
    },
    {
        "name": "Vishal Adhikari",
        "image": "/img/google/vishal.png",
        "star": 5,
        "link": "https://www.google.com/maps/contrib/104368326462755132007/reviews/@28.5702755,77.2198553,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "5 months ago",
        "review": "The autism services here have been a game-changer for our family. The therapists are patient and truly understand our child's needs. We've seen significant improvement in social skills and behavior. The personalized approach and constant communication make a huge difference. We're extremely grateful for this team."
    },

    {
        "name": "Z A I D K H A N",
        "image": "/img/google/zaidkhand.png",
        "star": 5,
        "link": "https://www.google.com/maps/contrib/110484038921111171507/reviews/@28.512715,77.2677787,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "5 months ago",
        "review": "Our experience with the occupational therapists at Adhyayan Inclusive Learning Centre has been fantastic. They are attentive, patient, and innovative in their approach. My child's motor skills and daily living activities have improved significantly. The therapists truly understand individual needs, making sessions both productive and enjoyable. Highly recommend"
    },
    {
        "name": "Anjali Narsariya",
        "image": "/img/google/a.png",
        "star": "5",
        "link": "https://www.google.com/maps/contrib/101014750430913984252/reviews/@28.512715,77.2677787,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "2 months ago",
        "review": "Highly recommend AILC for its holistic approach towards inclusive education. They truly care about every child's growth."
    },
    {
        "name": "Vinay Pandey",
        "image": "/img/google/vinay-pandy.png",
        "star": 5,
        "link": "https://www.google.com/maps/contrib/104801066233822502968/reviews/@28.5702755,77.2198553,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "7 months ago",
        "review": "Best autism therapy centre for Special education ,speech,OT and ABA therapy.Highly dedicated team run by Shri Rajeev Sir who is also an Author of the book Decoding Autism.We recommend this place to all the parents who wants dedicated help and consistent growth.The environment is child centric!!They are delivering really good results.Must join!!",
    },
    {
        "name": "Neeraj Negi",
        "image": "img/google/neeraj.png",
        "star": 5,
        "link": "https://www.google.com/maps/contrib/105826856346767481969/reviews/@28.555203,77.2727421,13z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
        "date": "8 months ago",
        "review": "If you are Searching Best ABa Center in Delhi. I will Suggest This is Best Center For ABA Therapy also Very Valuable Staff and Modern Method Teaching."
    },
]






function renderReviews() {
    const container = document.getElementById("testimonial-carousel");

    reviews.forEach((review) => {
        // Create the card container
        const card = document.createElement("div");
        card.classList.add("testimonial-card", "item");

        // Star rating
        const starsDiv = document.createElement("div");
        starsDiv.classList.add("stars");
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("i");
            star.classList.add("bi", "bi-star-fill");
            if (i <= review.star) {
                star.style.color = "#ff6200";
            }
            starsDiv.appendChild(star);
        }

        // Profile section
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("d-flex", "gap-2", "align-items-center");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("crouser-img");

        const img = document.createElement("img");
        img.src = review.image;
        img.alt = `${review.name} Image`;
        imgDiv.appendChild(img);

        const textDiv = document.createElement("div");
        textDiv.classList.add("d-flex", "flex-column", "gap-1");

        // Name link with h5
        const nameLink = document.createElement("a");
        nameLink.href = review.link;
        nameLink.classList.add("text-decoration-none");
        nameLink.target = "_blank";

        const name = document.createElement("h5");
        name.textContent = review.name;
        nameLink.appendChild(name);

        const date = document.createElement("small");
        date.textContent = review.date;

        textDiv.appendChild(nameLink);
        textDiv.appendChild(date);
        profileDiv.appendChild(imgDiv);
        profileDiv.appendChild(textDiv);

        // Review text with line clamp and "Read More" button
        const reviewText = document.createElement("p");
        reviewText.classList.add("reviews");
        reviewText.textContent = review.review;

        const readMoreButton = document.createElement("a");
        readMoreButton.classList.add("read-more");
        readMoreButton.href = "#";
        readMoreButton.textContent = "Read More";

        let isExpanded = false;

        readMoreButton.addEventListener("click", function (e) {
            e.preventDefault();
            if (isExpanded) {
                reviewText.classList.remove("expanded");
                readMoreButton.textContent = "Read More";
            } else {
                reviewText.classList.add("expanded");
                readMoreButton.textContent = "Read Less";
            }
            isExpanded = !isExpanded;
        });

        // Append elements
        card.appendChild(starsDiv);
        card.appendChild(profileDiv);
        card.appendChild(reviewText);
        card.appendChild(readMoreButton);
        container.appendChild(card);
    });

    $("#testimonial-carousel").owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        nav: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderReviews();
});