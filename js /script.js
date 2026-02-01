/* =========================
   LOGIN PAGE LOGIC
========================= */
function login() {
    const username = document.getElementById("username")?.value;
    const password = document.getElementById("password")?.value;

    // Dummy credentials
    if (username === "admin" && password === "1234") {
        window.location.href = "hotels.html";
    } else {
        alert("Invalid username or password");
    }
}

/* =========================
   HOTEL LIST PAGE LOGIC
========================= */

// Auto image slider for hotel cards
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        let slides = slider.querySelectorAll(".slide");
        let index = 0;

        if (slides.length > 0) {
            setInterval(() => {
                slides[index].classList.remove("active");
                index = (index + 1) % slides.length;
                slides[index].classList.add("active");
            }, 3000);
        }
    });
});
// Store selected hotel
function selectHotel(hotelName) {
    localStorage.setItem("selectedHotel", hotelName);
    window.location.href = "hotel.html";
}

/* =========================
   HOTEL DETAILS PAGE LOGIC
========================= */

const hotelData = {
    "The Oberoi Amarvilas": {
        meta: "Agra, Uttar Pradesh | Established 2000",
        desc: "Every room offers direct Taj Mahal views through marble corridors and Mughal-inspired gardens, with infinity pools and personalized butler service."
    },
    "The Oberoi Rajvilas": {
        meta: "Jaipur, Rajasthan | Established 1997",
        desc: "Fort-like palace resort with tented suites, elephant polo, and organic spa treatments spread across 32 acres of lush gardens."
    },
    "The Oberoi Vanyavilas Wildlife Resort": {
        meta: "Ranthambhore, Rajasthan | Established 2001",
        desc: "Luxury tented camp blending into tiger reserve wilderness, offering safari jeeps and Ayurvedic therapies."
    },
    "Taj Lake Palace": {
        meta: "Udaipur, Rajasthan | Established 1746 (Hotel since 1971)",
        desc: "Floating marble palace on Lake Pichola with boat-only arrivals, crystal chandeliers, and romantic rooftop dining."
    },
    "The Leela Mumbai": {
        meta: "Mumbai, Maharashtra | Established 2014",
        desc: "Opulent urban oasis with luxurious rooms, ESPA spa, skyline infinity pool, and exceptional service."
    }
};

// Load hotel details dynamically
document.addEventListener("DOMContentLoaded", () => {
    const hotelName = localStorage.getItem("selectedHotel");

    if (hotelName && hotelData[hotelName]) {
        const nameEl = document.getElementById("hotelName");
        const metaEl = document.getElementById("hotelMeta");
        const descEl = document.getElementById("hotelDescription");

        if (nameEl) nameEl.innerText = hotelName;
        if (metaEl) metaEl.innerText = hotelData[hotelName].meta;
        if (descEl) descEl.innerText = hotelData[hotelName].desc;
    }
});

// Navigate to packages page
function goToPackages() {
    window.location.href = "packages.html";
}
/* =========================
   HOTEL-WISE REVIEWS
========================= */

const hotelReviews = {
    "The Oberoi Amarvilas": [
        { name: "Rahul Mehta", rating: 5, comment: "Breathtaking Taj view and royal service." },
        { name: "Ananya Singh", rating: 4, comment: "Luxury at its finest." }
    ],

    "The Oberoi Rajvilas": [
        { name: "Vikram Rao", rating: 5, comment: "Palace-like stay, very peaceful." },
        { name: "Neha Kapoor", rating: 4, comment: "Beautiful heritage resort." }
    ],

    "The Oberoi Vanyavilas Wildlife Resort": [
        { name: "Arjun Patel", rating: 5, comment: "Safari + luxury = unforgettable." },
        { name: "Sneha Iyer", rating: 4, comment: "Nature lovers paradise." }
    ],

    "Taj Lake Palace": [
        { name: "Rohit Malhotra", rating: 5, comment: "Romantic and magical experience." },
        { name: "Pooja Verma", rating: 4, comment: "Boat entry was amazing." }
    ],

    "The Leela Mumbai": [
        { name: "Karan Shah", rating: 4, comment: "Perfect city luxury hotel." },
        { name: "Meera Joshi", rating: 5, comment: "Excellent service and comfort." }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const hotelName = localStorage.getItem("selectedHotel");
    const reviewsList = document.getElementById("reviewsList");

    if (!hotelName || !reviewsList) return;

    (hotelReviews[hotelName] || []).forEach(r => {
        renderReview(r.name, r.rating, r.comment);
    });
});

function renderReview(name, rating, comment) {
    const reviewsList = document.getElementById("reviewsList");

    const div = document.createElement("div");
    div.className = "review-card";
    div.innerHTML = `
        <strong>${name}</strong>
        <span>${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>
        <p>${comment}</p>
    `;

    reviewsList.appendChild(div);
}

function addReview(event) {
    event.preventDefault();

    const name = reviewerName.value;
    const rating = parseInt(reviewRating.value);
    const comment = reviewComment.value;

    renderReview(name, rating, comment);
    event.target.reset();
}

/* =========================
   PACKAGES PAGE LOGIC
========================= */

function selectPackage(packageName, price) {
    localStorage.setItem("selectedPackage", packageName);
    localStorage.setItem("packagePrice", price);
    window.location.href = "booking.html";
}

/* =========================
   BOOKING PAGE LOGIC
========================= */

// Load booking details
document.addEventListener("DOMContentLoaded", () => {
    const hotelInput = document.getElementById("hotelName");
    const packageInput = document.getElementById("packageName");
    const amountInput = document.getElementById("totalAmount");

    if (hotelInput) {
        hotelInput.value = localStorage.getItem("selectedHotel") || "N/A";
    }

    if (packageInput) {
        packageInput.value = localStorage.getItem("selectedPackage") || "N/A";
    }

    if (amountInput) {
        const price = localStorage.getItem("packagePrice") || "0";
        amountInput.value = "₹" + price;
    }
});

// Confirm booking
function confirmBooking(event) {
    event.preventDefault();

    alert("🎉 Booking Confirmed!\nThank you for choosing BookNest.");

    // Clear package-related data
    localStorage.removeItem("selectedPackage");
    localStorage.removeItem("packagePrice");
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "user" && password === "1234") {
        window.location.href = "hotels.html";
    } else {
        alert("Invalid username or password");
    }
}



 
