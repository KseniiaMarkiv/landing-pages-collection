$(function() {
    function slideNav() {
        $("#navSlide").toggleClass('open');
    }
    $("#nav").on("click", slideNav);

});

function fixedNav() {
    const nav = document.querySelector('nav');
    const breakpoint = 1;
    const screenWidth = window.innerWidth;
    const logo = document.querySelector('.nav-logo');
    const section2 = document.querySelector('.projects');


    if (window.scrollY >= breakpoint && screenWidth > 1050) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }

    if (window.pageYOffset >= section2.offsetTop && screenWidth < 1050) {
        logo.classList.remove('show-logo');
        logo.classList.add('remove-logo');
        nav.style.visibility = 'hidden';
        nav.style.transition = '1.5s all ease';
    } else {
        logo.classList.add('show-logo');
        logo.classList.remove('remove-logo');
        nav.style.visibility = 'visible';
        nav.style.transition = '1.5s all ease';
    }
}
window.addEventListener('scroll', fixedNav);