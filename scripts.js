
//text typing animation
document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#typed-text', {
        strings: ['&lt; Backend Developer /&gt;', '&lt; Scala Enthusiast /&gt;'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1500,
        loop: true,
    });
});
//animation
document.addEventListener('DOMContentLoaded', function () {
    var animationContainer = document.getElementById('lottie-animation');
    var animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Animations/Animation - 1725382294510.json'
    });
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
                        otherItem.style.opacity = '0.2';  // Lower opacity for non-hovered items
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




