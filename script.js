
// =================================
// 1. WELCOME MESSAGE
// =================================

console.log("Welcome to Calvin's Personal Website!");

// =================================
// 2. LIVE CLOCK
// =================================

const clock = document.createElement("p");

clock.id = "live-clock";
clock.style.color = "#38bdf8";
clock.style.marginTop = "15px";

document.querySelector(".hero-text").appendChild(clock);

function updateClock() {
    const now = new Date();

    clock.textContent = "Local Time: " +
        now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);


// =================================
// 3. MOBILE NAVIGATION MENU
// =================================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.className = "menu-button";
menuButton.setAttribute("aria-label", "Toggle navigation");
menuButton.setAttribute("aria-expanded", "false");

navbar.insertBefore(menuButton, navLinks);

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});


// =================================
// 4. BACK TO TOP BUTTON
// =================================

const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.className = "back-to-top";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});


// =================================
// 5. SCROLL ANIMATIONS
// =================================

const sections = document.querySelectorAll(
    ".hero-text, .profile, .content-section"
);

sections.forEach(function(section) {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});

console.log("All website features loaded successfully!");
const welcomeButton = document.getElementById("welcome-btn");

welcomeButton.addEventListener("click", function() {
    alert("Welcome to Calvin Luvale's personal website!");
});const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    contactForm.reset();
});