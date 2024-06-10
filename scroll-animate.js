/** On Viewport Animation */

const elements = document.querySelectorAll('.animate');

// Options for the Intersection Observer
const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1
};

// Callback function to handle intersection
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animation when the target enters the viewport
            animateElement(entry.target);
            // Unobserve the target once animation is triggered
            observer.unobserve(entry.target);
        }
    });
};

/** Initialize intersection observer */
const observer = new IntersectionObserver(callback, options);

elements.forEach(ele => {
    observer.observe(ele);
})

const animateElement = (element) => {
    const animationType = element.dataset.animation

    switch (animationType) {
        case 'fadeUp':
            anime({
                targets: element,
                translateY: ['100px', '0px'],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutQuad'
            })
            break;
        case 'fadeIn': 
            anime({
                targets: element,
                opacity: [0, 1],
                duration: 2000,
                easing: 'easeOutQuad'
            })
            break;
        case 'swipeRight':
            anime({
                targets: element,
                translateX: ['-1000x', '0px'],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutQuad'
            })
            break;
    }
}

