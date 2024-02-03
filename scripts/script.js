// toogle icon navigation
let menuIcon = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navigation.classList.toggle('active');
}

// remove toggle icon and navbar when click navigation links (scroll)
menuIcon.classList.remove('bx-x');
navigation.classList.remove('active');

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight - 100;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navigation links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

// toggle theme
let main = document.getElementById('color-btn-1');
main.onclick = function () {
    document.body.classList.add('main-theme');
    document.body.classList.remove('ocean-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('discord-theme');
}

let ocean = document.getElementById('color-btn-2');
ocean.onclick = function () {
    document.body.classList.add('ocean-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('discord-theme');
}

let e = document.getElementById('color-btn-3');
e.onclick = function () {
    document.body.classList.add('savane-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('ocean-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('discord-theme');
}

let white = document.getElementById('color-btn-4');
white.onclick = function () {
    document.body.classList.add('white-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('ocean-theme');
    document.body.classList.remove('discord-theme');
}

let discord = document.getElementById('color-btn-5');
discord.onclick = function () {
    document.body.classList.add('discord-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('ocean-theme');
}
