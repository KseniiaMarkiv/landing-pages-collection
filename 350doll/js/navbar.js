function fixedNav() {
    const nav = document.querySelector('header');
    const breakpoint = 1;
    const screenWidth = window.innerWidth;
    const logo = document.querySelector('.logo');
    const section2 = document.querySelector('.section-special');

    if (window.scrollY >= breakpoint && screenWidth > 768) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }

    if (window.pageYOffset >= section2.offsetTop && screenWidth < 768) {
        logo.classList.add('remove-logo');
        logo.classList.remove('add-logo');
    } else {
        logo.classList.add('add-logo');
        logo.classList.remove('remove-logo');
    }
}
window.addEventListener('scroll', fixedNav);

function slideNav() {
    const navSlide = document.querySelector('#navSlide');
    navSlide.classList.toggle("open");
}