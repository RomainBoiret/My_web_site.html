// toggle theme
let main = document.getElementById('color-btn-1');
let ocean = document.getElementById('color-btn-2');
let savane = document.getElementById('color-btn-3');
let white = document.getElementById('color-btn-4');
let discord = document.getElementById('color-btn-5');

main.onclick = function () {
    document.body.classList.add('main-theme');
    document.body.classList.remove('ocean-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('discord-theme');
}

ocean.onclick = function () {
    document.body.classList.add('ocean-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('discord-theme');
}

savane.onclick = function () {
    document.body.classList.add('savane-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('ocean-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('discord-theme');
}

white.onclick = function () {
    document.body.classList.add('white-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('ocean-theme');
    document.body.classList.remove('discord-theme');
}

discord.onclick = function () {
    document.body.classList.add('discord-theme');
    document.body.classList.remove('main-theme');
    document.body.classList.remove('savane-theme');
    document.body.classList.remove('white-theme');
    document.body.classList.remove('ocean-theme');
}
