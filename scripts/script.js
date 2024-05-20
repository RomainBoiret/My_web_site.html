// toggle icon navigation
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

        if (top >= offset && top < offset + height) {
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
