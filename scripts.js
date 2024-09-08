
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


/*Experience tab*/
window.addEventListener('scroll', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const experienceText = document.getElementById('experience-text');
    const educationText = document.getElementById('education-text');

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight / 5 * 4;

        if (itemTop < triggerBottom) {
            item.classList.add('active');
            const year = item.querySelector('.year').textContent;
            if (year.includes('2016')) {
                educationText.classList.add('active');
                experienceText.classList.remove('active');
            } else {
                experienceText.classList.add('active');
                educationText.classList.remove('active');
            }
        } else {
            item.classList.remove('active');
        }
    });
});

// Add hover events to switch Professional Experience and Education
const experienceText = document.getElementById('experience-text');
const educationText = document.getElementById('education-text');

experienceText.addEventListener('mouseenter', () => {
    educationText.classList.remove('active');
    experienceText.classList.add('active');
});

educationText.addEventListener('mouseenter', () => {
    experienceText.classList.remove('active');
    educationText.classList.add('active');
});
