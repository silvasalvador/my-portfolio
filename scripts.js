
//text typing animation
document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#typed-text', {
        strings: ['&lt;Problem Solver/&gt;', '&lt;Continuous Learner/&gt;', '&lt;Team Player/&gt;', '&lt;API Designer/&gt;', '&lt;System Architect/&gt;'],

        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1500,
        loop: true,
    });
});

// Function to load Lottie animations
function loadLottieAnimation(containerId, animationPath) {
    var animationContainer = document.getElementById(containerId);
    var animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
    });
}

// Load multiple animations by calling the function with different container IDs and file paths
document.addEventListener('DOMContentLoaded', function () {
    loadLottieAnimation('intro-animation', 'Animations/laptop-animation.json');
});

//glow effect
document.addEventListener('DOMContentLoaded', () => {
    // Create a cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Move the cursor element with the mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;  // Use clientX for viewport-relative position
        cursor.style.top = `${e.clientY}px`;   // Use clientY for viewport-relative position
    });
});



// timeline hover
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length > 0) {
        timelineItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                console.log('Hovering over:', item); // Debugging to ensure the event fires
                // On hover, reduce opacity of all other items
                timelineItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.style.opacity = '0.3';  // Lower opacity for non-hovered items
                    }
                });
                // Increase opacity for the hovered item
                item.style.opacity = '1';
            });

            item.addEventListener('mouseleave', () => {
                console.log('Stopped hovering:', item); // Debugging to ensure the event stops
                // Reset opacity of all items when no item is hovered
                timelineItems.forEach((otherItem) => {
                    otherItem.style.opacity = '0.8'; // Reset to default opacity
                });
            });
        });
    }
});
//Projects hover
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    if (projectItems.length > 0) {
        projectItems.forEach((item) => {

            item.addEventListener('mouseenter', () => {
                projectItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.style.opacity = '0.3';  // Lower opacity for non-hovered items
                    }
                });
                item.style.opacity = '1';
            });

            item.addEventListener('mouseleave', () => {
                // Reset opacity of all items and GitHub link when no item is hovered
                projectItems.forEach((otherItem) => {
                    otherItem.style.opacity = '.8'; // Reset opacity
                });

            });
        });
    }
});

let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {  // Hide header when scrolling down
        header.style.top = "-100px";
    } else {  // Show header when scrolling up
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

// Elements selection
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.menu-list li a');

// Function to open the menu
hamburgerIcon.addEventListener('click', () => {
    mobileNav.classList.add('active'); // Slide in the menu
    overlay.classList.add('active');   // Show overlay
    document.body.classList.add('nav-open'); // Prevent background scroll
});

// Function to close the menu
function closeMenu() {
    mobileNav.classList.add('closing'); // Add the closing class for slide-out animation
    overlay.classList.remove('active'); // Hide overlay
    document.body.classList.remove('nav-open'); // Re-enable background scroll

    // Listen for the end of the transition to remove the active class
    mobileNav.addEventListener('transitionend', function () {
        mobileNav.classList.remove('active');
        mobileNav.classList.remove('closing'); // Clean up the closing class after animation
    }, { once: true }); // Ensure this only triggers once
}

// Close menu when clicking the close button
closeButton.addEventListener('click', closeMenu);

// Close menu when clicking the overlay (outside the menu)
overlay.addEventListener('click', closeMenu);

// Close the menu when a navigation link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


// Animation for fade in 
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in-section');

    const thresholdValue = window.innerWidth < 768 ? 0.1 : 0.2; // Set to 0.1 for mobile

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: thresholdValue
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});