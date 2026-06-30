
const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const htmlTag = document.documentElement;
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');

const lightLogos = document.querySelectorAll(".logo-light");
const darkLogos = document.querySelectorAll(".logo-dark");

toggleBtn.addEventListener("click", () => {

    if (htmlTag.getAttribute("data-bs-theme") === "dark") {
        htmlTag.setAttribute("data-bs-theme", "light");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        btnLight.classList.add('d-none');
        btnDark.classList.remove('d-none');
        lightLogos.forEach(logo => logo.classList.remove("d-none"));
        darkLogos.forEach(logo => logo.classList.add("d-none"));

    } else {
        htmlTag.setAttribute("data-bs-theme", "dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        btnDark.classList.add('d-none');
        btnLight.classList.remove('d-none');
        lightLogos.forEach(logo => logo.classList.add("d-none"));
        darkLogos.forEach(logo => logo.classList.remove("d-none"));
    }

});

const menuContainer = document.getElementById('menuContainer');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');

scrollLeftBtn.addEventListener('click', () => {
    menuContainer.scrollBy({
        left: -150,
        behavior: 'smooth'
    });
});


let isDown = false;
let startX;
let scrollLeft;

menuContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - menuContainer.offsetLeft;
    scrollLeft = menuContainer.scrollLeft;
});
menuContainer.addEventListener('mouseleave', () => {
    isDown = false;
});
menuContainer.addEventListener('mouseup', () => {
    isDown = false;
});
menuContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - menuContainer.offsetLeft;
    const walk = (x - startX) * 2;
    menuContainer.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth <= 767) {

        const menus = document.querySelectorAll(".mega-menu-list");

        menus.forEach(function (menuBox) {

            const menu = menuBox.querySelector("ul");
            const firstItem = menu.querySelector("li:first-child");

            firstItem.addEventListener("click", function (e) {

                e.preventDefault();

                menu.classList.toggle("active");

            });

        });

    }

});