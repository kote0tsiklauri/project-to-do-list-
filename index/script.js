// ცვლადების შექმნა
let startt = document.getElementById("start")
let week = document.getElementById("mode_weekly")
let chall = document.getElementById("mode_challenge")
let day = document.getElementById("mode_daily")
let cas = document.getElementById("mode_casual")
let mode = "casual"

// Weekly არჩევა
function selectWeekly() {
    week.style.backgroundColor = "#0077ff"
    week.style.color = "white"
    chall.style.backgroundColor = "transparent"
    chall.style.color = "black"
    day.style.backgroundColor = "transparent"
    day.style.color = "black"
    cas.style.backgroundColor = "transparent"
    cas.style.color = "black"
    mode = "casual"
}

// Challenge არჩევა
function selectChallenge() {
    chall.style.backgroundColor = "#0077ff"
    chall.style.color = "white"
    week.style.backgroundColor = "transparent"
    week.style.color = "black"
    day.style.backgroundColor = "transparent"
    day.style.color = "black"
    cas.style.backgroundColor = "transparent"
    cas.style.color = "black"
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
    cas.style.backgroundColor = "transparent"
    cas.style.color = "black"
    mode = "daily"
}

function selectCasual(){
    cas.style.backgroundColor = "#0077ff"
    cas.style.color = "white"
    day.style.backgroundColor = "transparent"
    day.style.color = "black"
    week.style.backgroundColor = "transparent"
    week.style.color = "black"
    chall.style.backgroundColor = "transparent"
    chall.style.color = "black"
    mode = "casual"
}

// Redirect start function
function start() {
    if (mode === "weekly") {
        window.location = '/weekly/weekly.html'
    } else if (mode === "challenge") {
        window.location = '/challenge/challenge.html'
    } else if (mode === "daily") {
        window.location = '/tasks/task.html'
    } else if (mode == "casual") {
        window.location = '/casual/casual.html'
    }
    
}

const complaint = document.getElementById("feedback")

complaint.addEventListener("click",()=>{
    window.location = '/complaint/complaint.html'
})

selectCasual()