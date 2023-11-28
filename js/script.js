document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.querySelector('footer div');
    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
