window.addEventListener('scroll', function() {
    var fadeInElements = document.querySelectorAll('.fade-in');
    var delay = 500; // Adjust the delay time (in milliseconds) between each item

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
