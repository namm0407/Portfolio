var collinks = document.getElementsByClassName("col");
var tabcontents = document.getElementsByClassName("tab-contents");
const themeButton = document.getElementById('themeButton');

function opentab(event, colname) {
    for(col of collinks) {
        col.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(colname).classList.add("active-tab");
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.web');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}

document.querySelectorAll('h1').forEach((el, index) => {
    el.setAttribute('data-aos', 'zoom-in');
    el.setAttribute('data-aos-duration', '500');
});

// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 450,
        behavior: 'smooth'
    });
});

function initializeParticles(particleColor) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: particleColor },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: particleColor,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // Default to dark mode
    initializeParticles("#ffffff"); // White particles for dark mode
});

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.getElementById("particles-js").innerHTML = "";
        initializeParticles("#333333");
    } else {
        themeButton.innerHTML = '<i class="fa-regular fa-sun" style="color: #ffffff;"></i>';
        document.getElementById("particles-js").innerHTML = "";
        initializeParticles("#ffffff");
    }
});