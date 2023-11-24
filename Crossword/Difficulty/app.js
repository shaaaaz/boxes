function crossword(){
    window.location.href = "" ;
}

function sudoku(){
    window.location.href = "";
}


function goback(){
    window.location.href = "../../ChooseCorS/index.html";
}

function instructions(){
    window.location.href = "../Instructions/index.html";
}
const shift = document.querySelector(".box1")

const b = document.querySelector(".backbox")

function push(){
    console.log("H")
    shift.style.backgroundColor = "#00000000"
    shift.style.color = "#00000000"
    shift.style.border = "#000000"
    
    b.style.backgroundColor = "#D9D9D9"
    b.style.border = "2px solid black"
    localStorage.setItem("ThemeChoosen",1)
    window.location.href = "../GameMovies/index.html"
}

const shift2 = document.querySelector(".box2")
const b2 = document.querySelector(".backbox2")

function push2(){
    console.log("H")
    shift2.style.backgroundColor = "#00000000"
    shift2.style.color = "#00000000"
    shift2.style.border = "#000000"
    
    b2.style.backgroundColor = "#D9D9D9"
    b2.style.border = "2px solid black"
    localStorage.setItem("ThemeChoosen",2)
    window.location.href = "../GamePlaces/index.html"
}


const shift3 = document.querySelector(".box3")
const b3 = document.querySelector(".backbox3")

function push3(){
    console.log("H")
    shift3.style.backgroundColor = "#00000000"
    shift3.style.color = "#00000000"
    shift3.style.border = "#000000"
    
    b3.style.backgroundColor = "#D9D9D9"
    b3.style.border = "2px solid black"
    localStorage.setItem("ThemeChoosen",3)
    window.location.href = "../GameSports/index.html"
}



 

var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../../Audio/MainPage.mp3")

console.log(time)

openingAudio.pause()
openingAudio.currentTime = time;


document.addEventListener("DOMContentLoaded", () => {
    const start = new Date().getTime();
    window.addEventListener("beforeunload", () => {
        var end = new Date().getTime();
        var totalTime = (end - start) / 1000

        totalTime += time

        totalTime = JSON.stringify(totalTime); 

        localStorage.removeItem('timeSpent')
        localStorage.setItem('timeSpent', totalTime);

        console.log(totalTime)
    });
});



//audio


const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")
console.log(soundPage)

//audio

window.onload = function(){
    color()
    if(soundPage=="false"){
        console.log("HOAJ")
        audio.src = "../../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=10
        openingAudio.play()
    }
}

audio.onclick = function(){
    if(soundPage)
    {
        audio.src = "../../Images/No Audio.png"
        localStorage.setItem("sound",false)
        soundPage = false
        openingAudio.pause()
    }
    else{
        audio.src = "../../Images/Audio.png"
        localStorage.setItem("sound",true)
        soundPage = true
        openingAudio.currentTime = 4
        openingAudio.play()
    }
}













// const dmimg = document.querySelector(".dark-mode-img")

// var whatTheme = localStorage.getItem("colorMode")
// console.log("whatTheme",whatTheme)

// const wide = document.querySelectorAll(".backbox")
// const wide2 = document.querySelectorAll(".box")


// dmimg.onclick = function(){

//     colorSwitch()
// }


// function colorSwitch(){

//     console.log(whatTheme)
//     if(whatTheme=="1"){

//     document.body.style.backgroundColor = "#BBE8FE"

//     wide.forEach(function(element) {
//         element.style.backgroundColor = "#386FA4"
//     });

//     wide2.forEach(function(element) {
//         element.style.backgroundColor = "#BBE8FE"
//     });

//     whatTheme = 2

//     localStorage.setItem("colorMode",1)
//     }
//     else if(whatTheme=="2"){

//         document.body.style.backgroundColor = "#d6d6d6"


//         wide.forEach(function(element) {
//             element.style.backgroundColor = "#6a6a6a"
//         });

//         wide2.forEach(function(element) {
//             element.style.backgroundColor = "#d6d6d6"
//         });
    
//         whatTheme = 1


//         localStorage.setItem("colorMode",1)
//         }

//     console.log(whatTheme)
// }

// function color(){
//     console.log(whatTheme)
//     if(whatTheme=="2"){

//     document.body.style.backgroundColor = "#BBE8FE"

//     wide.forEach(function(element) {
//         element.style.backgroundColor = "#386FA4"
//     });

//     wide2.forEach(function(element) {
//         element.style.backgroundColor = "#BBE8FE"
//     });

//     // localStorage.setItem("colorMode",2)
//     }
//     else if(whatTheme=="1"){

//         document.body.style.backgroundColor = "#d6d6d6"


//         wide.forEach(function(element) {
//             element.style.backgroundColor = "#6a6a6a"
//         });

//         wide2.forEach(function(element) {
//             element.style.backgroundColor = "#d6d6d6"
//         });


//         // localStorage.setItem("colorMode",1)
//         }

// }