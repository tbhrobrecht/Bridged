// document.addEventListener("scroll", function() {
//     const mainContent = document.querySelector("main");
//     const scrollPosition = window.scrollY;
//     const fadeStart = 0; // Start fading out immediately
//     const fadeEnd = 300; // Completely faded out at 300px scroll

//     // Calculate opacity based on scroll position
//     let opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
//     opacity = Math.max(opacity, 0); // Ensure opacity does not go below 0

//     mainContent.style.opacity = opacity;
// });

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

