/*
document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('yellow').onclick = partyYellow;
document.getElementById('pink').onclick = partyPink;
document.getElementById('red').onclick = partyRed;
document.getElementById('cream').onclick = partyCream;

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
    document.querySelector('body').style.color = 'black';
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
    document.querySelector('body').style.color = 'black';
}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0,254, 255,1)';
    document.querySelector('body').style.color = 'black';
}

function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'rgba(255,252,184,1)';
    document.querySelector('body').style.color = 'black';
}

function partyPink() {
    document.querySelector('body').style.backgroundColor = 'rgb(253,206,222,1)';
    document.querySelector('body').style.color = 'black';
}

function partyRed() {
    document.querySelector('body').style.backgroundColor = 'rgb(201,37,25,1)';
    document.querySelector('body').style.color = 'black';
}

function partyCream() {
    document.querySelector('body').style.backgroundColor = 'rgb(255,250,240,1)';
    document.querySelector('body').style.color = 'black';
}
*/
document.getElementById('happy').onclick = happyDance
document.getElementById('sad').onclick = sadDance
document.getElementById('sleepy').onclick = sleepyDance
document.getElementById('romance').onclick = romanticDance
document.getElementById('saucey').onclick = sauceyDance

function happyDance() {
    document.querySelector('#songResult').innerText = "Peachy by Bad Suns"
}
function sadDance() {
    document.querySelector('#songResult').innerText = "She Used to Be Mine by Sara Bareilles"
}
function sleepyDance() {
    document.querySelector('#songResult').innerText = "Verses by Olafur Olsen"
}
function romanticDance() {
    document.querySelector('#songResult').innerText = "Let's Get It On by Marvin Gaye"
}
function sauceyDance() {
    document.querySelector('#songResult').innerText = "Tequila by The Champs"
}

/* Play Song */
function playMyAudio() {
    document.getElementById("happyAudio").play();
}

function pauseMyAudio() {
    document.getElementById("happyAudio").pause();
}