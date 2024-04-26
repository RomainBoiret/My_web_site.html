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
