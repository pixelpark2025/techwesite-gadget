function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }
}
function popOut(element) {
    element.style.transform = "scale(1.1)";
    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 300);
}

const testimonials = [
    {
        img: "assets/female.jpg",
        text: "Absolutely love this gadget! It has made my daily tasks so much easier. Highly recommend!",
        name: "Sarah Johnson",
        stars: "★★★★☆"
    },
    {
        img: "assets/male.jpg",
        text: "Fantastic quality! The product exceeded my expectations, and customer service was excellent.",
        name: "James Smith",
        stars: "★★★★★"
    },
    {
        img: "assets/female2.jpg",
        text: "Very reliable gadgets. Been using it for months now, and it's still working perfectly!",
        name: "Emily Davis",
        stars: "★★★★☆"
    }
];

let currentIndex = 0;
const img = document.querySelector(".testimonial-img");
const text = document.querySelector(".testimonial-text");
const name = document.querySelector(".customer-name");
const stars = document.querySelector(".stars");

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

function updateTestimonial() {
    img.src = testimonials[currentIndex].img;
    text.textContent = testimonials[currentIndex].text;
    name.textContent = testimonials[currentIndex].name;
    stars.textContent = testimonials[currentIndex].stars;
}

updateTestimonial(); // Load first testimonial



