// redirect to choose page

function goback(){
    window.location.href = "../../ChooseCorS/index.html";
}

function instructions(){
    window.location.href = "../Instructions/index.html";
}

// onclick the buttons should have an effect that they are pushed 

const shift = document.querySelector(".box1")

const b = document.querySelector(".backbox")

// button 1 animation and redirection

function push(){
    shift.style.backgroundColor = "#00000000"
    shift.style.color = "#00000000"
    shift.style.border = "#000000"
    
    b.style.backgroundColor = "#D9D9D9"
    b.style.border = "2px solid black"
    localStorage.setItem("ThemeChoosen",1)
    window.location.href = "../GameMovies/index.html"
}

// button 2 animation and redirection

const shift2 = document.querySelector(".box2")
const b2 = document.querySelector(".backbox2")

function push2(){
    // console.log("H")
    shift2.style.backgroundColor = "#00000000"
    shift2.style.color = "#00000000"
    shift2.style.border = "#000000"
    
    b2.style.backgroundColor = "#D9D9D9"
    b2.style.border = "2px solid black"
    localStorage.setItem("ThemeChoosen",2)
    window.location.href = "../GamePlaces/index.html"
}

// button 3 animation and redirection



const shift3 = document.querySelector(".box3")
const b3 = document.querySelector(".backbox3")

function push3(){
    // console.log("H")
    shift3.style.backgroundColor = "#00000000"
    shift3.style.color = "#00000000"
    shift3.style.border = "#000000"
    
    b3.style.backgroundColor = "#D9D9D9"
    b3.style.border = "2px solid black"
    localStorage.setItem("ThemeChoosen",3)
    window.location.href = "../GameSports/index.html"
}



//  calculate time spent of the page and play Audio on load

var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../../Audio/MainPage.mp3")

// console.log(time)

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





const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")

window.onload = function(){
    if(soundPage=="false"){
        audio.src = "../../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=10
        openingAudio.play()
    }
}

// mute the audio on button click

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















// }
