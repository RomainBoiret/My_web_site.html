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
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
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

// copy color code
function copyColorCode(element) {
    var bgColor = window.getComputedStyle(element).getPropertyValue("background-color");

    var hexColor = rgbToHex(bgColor);

    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = hexColor;

    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempTextArea);
}

function rgbToHex(rgb) {
    var hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + ("0" + parseInt(hex[1], 10).toString(16)).slice(-2) +
                 ("0" + parseInt(hex[2], 10).toString(16)).slice(-2) +
                 ("0" + parseInt(hex[3], 10).toString(16)).slice(-2);
}
