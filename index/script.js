// ცვლადების შექმნა
let startt = document.getElementById("start")
let week = document.getElementById("mode_weekly")
let chall = document.getElementById("mode_challenge")
let day = document.getElementById("mode_daily")
let mode = "weekly"

// Weekly არჩევა
function selectWeekly() {
    week.style.backgroundColor = "#0077ff"
    week.style.color = "white"
    chall.style.backgroundColor = "transparent"
    chall.style.color = "black"
    day.style.backgroundColor = "transparent"
    day.style.color = "black"
    mode = "weekly"
}

// Challenge არჩევა
function selectChallenge() {
    chall.style.backgroundColor = "#0077ff"
    chall.style.color = "white"
    week.style.backgroundColor = "transparent"
    week.style.color = "black"
    day.style.backgroundColor = "transparent"
    day.style.color = "black"
    mode = "challenge"
}

// Daily არჩევა
function selectDaily() {
    day.style.backgroundColor = "#0077ff"
    day.style.color = "white"
    week.style.backgroundColor = "transparent"
    week.style.color = "black"
    chall.style.backgroundColor = "transparent"
    chall.style.color = "black"
    mode = "daily"
}

// Redirect start function
function start() {
    if (mode === "weekly") {
        window.location = '/weekly/weekly.html'
    } else if (mode === "challenge") {
        window.location = '/challenge/challenge.html'
    } else if (mode === "daily") {
        window.location = '/tasks/task.html'
    }
}

const complaint = document.getElementById("feedback")

complaint.addEventListener("click",()=>{
    window.location = '/complaint/complaint.html'
})