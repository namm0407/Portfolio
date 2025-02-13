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