let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

let homeScore = 0;
let guestScore = 0;

function homeAdd1() {
        homeScore += 1
        homeScoreEl.innerText = homeScore
}

function homeAdd2() {
        homeScore += 2
        homeScoreEl.innerText = homeScore
}

function homeAdd3() {
        homeScore += 3
        homeScoreEl.innerText = homeScore
}

function guestAdd1() {
        guestScore += 1
        guestScoreEl.innerText = guestScore
}

function guestAdd2() {
        guestScore += 2
        guestScoreEl.innerText = guestScore
}

function guestAdd3() {
        guestScore += 3
        guestScoreEl.innerText = guestScore
}

function reset() {
        homeScore = 0
        homeScoreEl.innerText = homeScore
        guestScore = 0
        guestScoreEl.innerText = guestScore
}