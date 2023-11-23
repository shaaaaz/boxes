function crossword(){
    window.location.href = "../Crossword/Difficulty/index.html" ;
}

function sudoku(){
    window.location.href = "../Sudoku/Difficulty/index.html" ;
}


function goback(){
    window.location.href = "../index.html";
}









var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../Audio/MainPage.mp3")

console.log(time)



openingAudio.pause()
openingAudio.currentTime = time;
let n = localStorage.getItem("nickName")

window.onload = function(){
    // if(sound)
    // {
    openingAudio.play()
    // }
    console.log(n)
    // if(null){
        console.log("HEYYYY")
        h.innerHTML = `Hey ${n}! What would you like to play today? `
    // }
}

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
        audio.src = "../Images/No Audio.png"
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

const h = document.querySelector(".heading")

