const menuBtn = document.getElementById("menu-btn"); // Fixed typo in "menue-btn"
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu open/close
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu when a link is clicked
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal options
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Reveal animations on scroll
ScrollReveal().reveal("header__image img", {
    ...scrollRevealOptions,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".header__image__content", {
    duration: 1000,
    delay: 1500,
});

ScrollReveal().reveal(".product__image img", {
    ...scrollRevealOptions,
    origin: "left",
});

ScrollReveal().reveal(".product__card", {
    ...scrollRevealOptions,
    delay: 500,
    interval: 500,
});

// Initialize Swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centerSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        depth: 250,
        modifier: 1,
        scale: 0.75,
        slideShadows: false,
        stretch: -100,
    },
});
