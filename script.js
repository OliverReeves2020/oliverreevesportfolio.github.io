var fadeInElements = document.querySelectorAll('.fade-in');
var delay = 200; // Adjust the initial delay time (in milliseconds) between each item
var lastScrollTime = Date.now();
var lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
var currentDelay = delay;

function fadeInElement(element, delay) {
    setTimeout(function(item) {
        item.classList.add('visible');
    }, delay, element);
}

function calculateDelay(scrollVelocity) {
    // Adjust the formula to calculate the new delay based on the scroll velocity
    // For example, you can divide the initial delay by the scroll velocity
    return delay / scrollVelocity;
}

function scrollHandler() {
    var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var scrollVelocity = Math.abs(currentScrollPosition - lastScrollPosition) / (Date.now() - lastScrollTime);

    if (scrollVelocity > 0) {
        currentDelay = calculateDelay(scrollVelocity);
    }

    for (var i = 0; i < fadeInElements.length; i++) {
        var element = fadeInElements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            fadeInElement(element, i * currentDelay);
        }
    }

    lastScrollTime = Date.now();
    lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', function() {
    requestAnimationFrame(scrollHandler);
});

window.addEventListener('DOMContentLoaded', function() {
    var fadeLoadElements = document.querySelectorAll('.fade-load');
    var delay = 200; // Adjust the delay time (in milliseconds) between each item

    for (var i = 0; i < fadeLoadElements.length; i++) {
        setTimeout(function(item) {
            item.classList.add('visible');
        }, i * delay, fadeLoadElements[i]);
    }
});

window.addEventListener('load', function() {
    var slideInElements = document.querySelectorAll('.slide-in');
    var delay = 200; // Adjust the delay time (in milliseconds) between each item

    for (var i = 0; i < slideInElements.length; i++) {
        var element = slideInElements[i];

        setTimeout(function(item) {
            item.classList.add('visible');
        }, i * delay, element);
    }
});

const menuToggle = document.getElementById('menu__toggle');
const blurElement = document.getElementById('blur');

menuToggle.addEventListener('change', () => {
    blurElement.classList.toggle('visible', menuToggle.checked);
});


