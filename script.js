window.addEventListener('scroll', function() {
    var fadeInElements = document.querySelectorAll('.fade-in');
    var delay = 250; // Adjust the delay time (in milliseconds) between each item

    for (var i = 0; i < fadeInElements.length; i++) {
        var element = fadeInElements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            setTimeout(function(item) {
                item.classList.add('visible');
            }, i * delay, element);
        }
    }
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

