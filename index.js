let scoreHost = 0
let scoreGuest = 0
document.getElementById("scoreHost").textContent = scoreHost
document.getElementById("scoreGuest").textContent = scoreGuest
sumHost = document.getElementById("scoreHost")
sumGuest = document.getElementById("scoreGuest")
function addHost1() {
    scoreHost += 1
    sumHost.textContent = scoreHost
}
function addHost2() {
    scoreHost += 2
    sumHost.textContent = scoreHost
}
function addHost3() {
    scoreHost += 3
    sumHost.textContent = scoreHost
}
function subtractHost1() {
    scoreHost -= 1
    sumHost.textContent = scoreHost
}
function subtractHost2() {
    scoreHost -= 2
    sumHost.textContent = scoreHost
}
function subtractHost3() {
    scoreHost -= 3
    sumHost.textContent = scoreHost
}
function addGuest1() {
    scoreGuest += 1
    sumGuest.textContent = scoreGuest
}
function addGuest2() {
    scoreGuest += 2
    sumGuest.textContent = scoreGuest
}
function addGuest3() {
    scoreGuest += 3
    sumGuest.textContent = scoreGuest
}
function subtractGuest1() {
    scoreGuest -= 1
    sumGuest.textContent = scoreGuest
}
function subtractGuest2() {
    scoreGuest -= 2
    sumGuest.textContent = scoreGuest
}
function subtractGuest3() {
    scoreGuest -= 3
    sumGuest.textContent = scoreGuest
}
function resetHost() {
    sumHost.textContent = 0
    scoreHost = 0
}
function resetGuest() {
    sumGuest.textContent = 0
    scoreGuest = 0
}