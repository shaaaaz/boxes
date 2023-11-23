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
    window.location.href = "../GameSports/index.html"
}

// var time = window.localStorage.getItem('timeSpent');
// var time2 = window.localStorage.getItem('timeSpent1');
// console.log("time",time)
// console.log("time2",time2)

// time = parseFloat(time)
// time2 = parseFloat(time2)


// var nowTime = time + time2

// console.log(nowTime)

// const openingAudio = new Audio("../../Audio/MainPage.mp3")

// openingAudio.pause()
// openingAudio.currentTime = nowTime;
// openingAudio.play()

// document.addEventListener("DOMContentLoaded", () => {
//     const start = new Date().getTime();
//     window.addEventListener("beforeunload", () => {
//         var end = new Date().getTime();
//         var totalTime = (end - start) / 1000
//         totalTime += time
//         totalTime = JSON.stringify(totalTime); 

//         localStorage.setItem('timeSpent2', totalTime);

        
//     });
// });

var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../../Audio/MainPage.mp3")

console.log(time)

openingAudio.pause()
openingAudio.currentTime = time;
openingAudio.play()

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

let sound = localStorage.getItem("sound")
console.log(sound)

audio.onclick = function(){
    if(sound)
    {
        audio.src = "../../Images/No Audio.png"
        localStorage.setItem("sound",false)
        sound = false
        openingAudio.pause()
    }
    else{
        audio.src = "../Images/Audio.png"
        localStorage.setItem("sound",true)
        sound = true
        openingAudio.currentTime = 4
        openingAudio.play()
    }
}