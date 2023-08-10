// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden')
    hamburger.classList.toggle('hamburger-active')
})

// Navbar Fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}