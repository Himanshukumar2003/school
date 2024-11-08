const gallery = [
    { heading: "In House assessment of CWSN", img: "img/gallery/2.jpg" },
    { heading: "Individual attention", img: "img/gallery/3.jpg" },
    { heading: "Our Star Performers Of Olympiad", img: "img/gallery/4.jpg" },
    { heading: " Aishani among Topper from AILC in National Talent Olympiad", img: "img/gallery/5.jpg" },
    { heading: "Our students getting awarded at National Talent awards", img: "img/gallery/6.jpg" },
    { heading: "Book `DECODING AUTISM` written by RAJEEV Sir is released at Mayo College Ajmer, by General Kulkarni ji", img: "img/gallery/7.jpg" },
    { heading: "Book Presented to the Ms Kanchan Khandke--Principal Mayo Girls School", img: "img/gallery/8.jpg" },
    { heading: "Diwali function at AILC", img: "img/gallery/9.jpg" },
    { heading: "INTERNSHIP of Post Graduate students from Delhi University", img: "img/gallery/10.jpg" },
    { heading: "At Kendriya Vidyalaya Faridabad", img: "img/gallery/11.jpg" },
    { heading: "Concentration and Focus Focus building classes", img: "img/gallery/12.jpg" },
    { heading: "Training sessions for senior teachers of Mayo College Ajmer", img: "img/gallery/13.jpg" },
    { heading: "For Teachers Training Program on Inclusive education at DAV Jasola Vihar", img: "img/gallery/14.jpg" },
    { heading: "With our students at Tagore International School, EOK", img: "img/gallery/15.jpg" },
    { heading: "Our Star Performers", img: "img/gallery/16.jpg" },
    { heading: "Teachers training program at Jasola Vihar", img: "img/gallery/17.jpg" },

    { heading: "Individual attention", img: "img/gallery/23.jpg" },
    { heading: "Individual attention", img: "img/gallery/25.jpg" },
    { heading: "Addressing teachers at Mayo cllg, Ajmer", img: "img/gallery/26.jpg" },
    { heading: "Addressing teachers at Mayo cllg, Ajmer", img: "img/gallery/27.jpg" },
    { heading: "Addressing teachers at Mayo cllg, Ajmer", img: "img/gallery/29.jpg" },
    { heading: "Teachers training program at Jasola Vihar", img: "img/gallery/30.jpg" },

    { heading: "Mock sessions during our INTERNSHIP Program for DU students", img: "img/gallery/34.jpg" },
    { heading: "Addressing Junior school students at Mayo College Ajmer", img: "img/gallery/35.jpg" },
    { heading: "Concentration building Exercises", img: "img/gallery/36.jpg" },
    { heading: "Teachers Training program on Inclusive education at St Francis School", img: "img/gallery/37.jpg" },
    { heading: "Occupational THERAPY", img: "img/gallery/1.jpg" },
];


let currentIndex = 0;

function renderGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    gallery.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = ' col-md-4 col-sm-6 gallery-card';
        col.innerHTML = `
        <div class="gallery-cards">
        <img src="${item.img}" alt="Gallery Image" onclick="openModal(${index})">
        <h3>${item.heading}</h3>
        </div>
      `;
        galleryContainer.appendChild(col);
    });
}

// Function to open the modal and display the current image
function openModal(index) {
    currentIndex = index;
    updateModalImage();
    $('#imageModal').modal('show');
}

// Function to update the modal image based on the current index
function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = gallery[currentIndex].img;
}

document.getElementById('closeBtn').addEventListener('click', () => {
    $('#imageModal').modal('hide');
});

// Navigate to the previous image
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    updateModalImage();
});

// Navigate to the next image
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gallery.length;
    updateModalImage();
});

// Initialize the gallery on page load
document.addEventListener('DOMContentLoaded', renderGallery);
