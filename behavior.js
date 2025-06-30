var collinks = document.getElementsByClassName("col");
var tabcontents = document.getElementsByClassName("tab-contents");

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
        top: 0,
        behavior: 'smooth'
    });
});