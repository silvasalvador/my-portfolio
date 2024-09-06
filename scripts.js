
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
