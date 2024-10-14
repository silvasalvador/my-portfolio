
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

window.addEventListener("scroll", function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {  // Hide header when scrolling down
    header.style.top = "-100px";
  } else {  // Show header when scrolling up
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});