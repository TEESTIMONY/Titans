let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('#menu');

menuIcon.onclick = () => {
    console.log('Menu icon clicked'); // Debugging
    menuIcon.classList.toggle('bx-x');

    if (menu.style.maxHeight === '0px' || menu.style.maxHeight === '') {
        menu.style.maxHeight = menu.scrollHeight + 'px';
    } else {
        menu.style.maxHeight = '0px';
    }
};


document.getElementById("menu-icon").addEventListener("click", function () {
    const navLinks = document.querySelector(".nav-links-mobile");
    navLinks.classList.toggle("show");
});
