window.addEventListener('load', function () {  
    //Select Nav DOM items
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');

    // Set initial state
    let showMenu = false;

    menuBtn.addEventListener('click', function () {  
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            // Set menu state
            showMenu = true;
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));

            // Set menu state
            showMenu = false;
        }
    });
});

$(document).ready(function () {  
    $('#header').load('include/menu.html');
});