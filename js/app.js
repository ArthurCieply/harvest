const menuBtn = document.querySelector('.menu-btn');
const navTabs = document.querySelector('.nav-tabs');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navTabs.classList.toggle('revealed');
    
});