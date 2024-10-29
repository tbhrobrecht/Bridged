function toggleMenu() {
    const menu = document.getElementById("slide-menu");
    const body = document.body;
    
    // Toggle the active class on the slide menu
    menu.classList.toggle("active");
    
    // Disable scrolling by toggling a class on the body
    if (menu.classList.contains("active")) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
}

// Close the menu if the user clicks outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById("slide-menu");
    const hamburger = document.querySelector('.hamburger-icon');

    // Check if the click is outside the menu and hamburger icon
    if (menu.contains(event.target)) {
        menu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

let lastScrollPosition = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight; // Automatically get header height

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > headerHeight) {
        // User is scrolling down, hide the header
        header.style.top = `-${headerHeight}px`; // Set to negative header height
    } else if (currentScrollPosition < lastScrollPosition) {
        // User is scrolling up, show the header
        header.style.top = '0';
    }

    lastScrollPosition = currentScrollPosition;
});

