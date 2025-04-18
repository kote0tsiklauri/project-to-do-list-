//ცვლადების შექმნა
let startt = document.getElementById("start")
let week = document.getElementById("mode_weekly")
let chall = document.getElementById("mode_challenge")
let mode = "weekly"




//ფუნქცია რომელიც მონიჭნავს weekly დივს
function select1(){
    week.style.backgroundColor = "#0077ff"
    week.style.Color = "white"
    chall.style.backgroundColor = "transparent"
    mode = "weekly"
    

}
//ფუნქცია რომელიც მონიჭნავს challenge დივს
function select2(){
    week.style.backgroundColor = "transparent"
    chall.style.Color = "white"
    chall.style.backgroundColor = "#0077ff"
    mode = "challenge"

}
//ფუნქცია რომელიც გადაგამისამართებს არჩევანის მიხედვით
function start(){
    if(mode == "weekly"){
        window.location='/weekly/weekly.html'
    }
    else{
        window.location='/challenge/challenge.html'
    }
   

}

