// redirect to the next page

function goback(){
    window.location.href = "../../ChooseCorS/index.html";
}

function instructions(){
    window.location.href = "../Instructions/index.html";
}





// create animation like efffect when button is clciked redirect to tthe desired level page

const shift = document.querySelector(".box1")

const b = document.querySelector(".backbox")

function push(){
    shift.style.backgroundColor = "#00000000"
    shift.style.color = "#00000000"
    shift.style.border = "#000000"
    
    b.style.backgroundColor = "#D9D9D9"
    b.style.border = "2px solid black"

    localStorage.setItem("sudokuDifficulty",1)

    window.location.href = "../Game/index.html"
}

const shift2 = document.querySelector(".box2")
const b2 = document.querySelector(".backbox2")

function push2(){
    shift2.style.backgroundColor = "#00000000"
    shift2.style.color = "#00000000"
    shift2.style.border = "#000000"
    
    b2.style.backgroundColor = "#D9D9D9"
    b2.style.border = "2px solid black"

    localStorage.setItem("sudokuDifficulty",2)

    window.location.href = "../Game/index.html"
}


const shift3 = document.querySelector(".box3")
const b3 = document.querySelector(".backbox3")

function push3(){
    shift3.style.backgroundColor = "#00000000"
    shift3.style.color = "#00000000"
    shift3.style.border = "#000000"
    
    b3.style.backgroundColor = "#D9D9D9"
    b3.style.border = "2px solid black"

    localStorage.setItem("sudokuDifficulty",3)

    window.location.href = "../Game/index.html"
}








// calculate time spent on this page and play audio

var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../../Audio/MainPage.mp3")


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

    });
});

window.onload = function(){
    if(soundPage=="false"){
        audio.src = "../../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=10
        openingAudio.play()
    }
}





// functionality of the audio mute and playbuttons

const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")

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

