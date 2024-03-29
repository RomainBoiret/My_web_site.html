// Define the constants
const USERNAME = 'RomainBoiret';

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

let savane = document.getElementById('color-btn-3');
savane.onclick = function () {
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

// fetch github data
function fetchData(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    }).catch(error => {
        console.error('Fetch error:', error);
    });
}

// Recursive function to perform binary search on stars
function binarySearchStars(startPage, endPage) {
    if (startPage > endPage) {
        return endPage; // Binary search is complete
    }

    const midPage = Math.floor((startPage + endPage) / 2);
    const url = `https://api.github.com/users/${USERNAME}/starred?per_page=1&page=${midPage}`;

    return fetchData(url).then(data => {
        if (data.length === 0) {
            // No stars on the current page, search to the left
            return binarySearchStars(startPage, midPage - 1);
        } else {
            // A star on the current page, search to the right
            return binarySearchStars(midPage + 1, endPage);
        }
    });
}

function fetchGithubProfile() {
    // Number of public repositories
    fetchData(`https://api.github.com/users/${USERNAME}`).then(data => {
        document.getElementById('github-repos').innerText = (data) ? data.public_repos : 'unknown';
    });

    // Number of contributions
    fetchData(`https://github-contributions-api.deno.dev/${USERNAME}.json`).then(data => {
        document.getElementById('github-contributions').innerText = (data) ? data.totalContributions : 'unknown';
    })

    // Number of pull requests
    fetchData(`https://api.github.com/search/issues?q=+type:pr+user:${USERNAME}&sort=created&order=asc`).then(data => {
        document.getElementById('github-prs').innerText = (data) ? data.total_count : 'unknown';
    })

    // Number of stars (last because send several requests)
    binarySearchStars(1, 1_000).then(lastPage => {
        document.getElementById('github-stars').innerText = lastPage;
    });
}

// Wait for the DOM to be loaded before loading the profile
window.addEventListener("DOMContentLoaded", fetchGithubProfile);
