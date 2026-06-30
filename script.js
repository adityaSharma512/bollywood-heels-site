const hero = document.querySelector(".hero");

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let current = 0;

setInterval(() => {
    current++;
    if (current >= heroImages.length) {
        current = 0;
    }

    hero.style.backgroundImage = `url('${heroImages[current]}')`;
}, 4000);


window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 80) {
        nav.style.background = "rgba(0,0,0,0.95)";
    } else {
        nav.style.background = "rgba(0,0,0,0.75)";
    }
});

document.addEventListener("contextmenu", event => event.preventDefault());