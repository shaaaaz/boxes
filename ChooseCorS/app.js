function crossword(){
    window.location.href = "../Crossword/Difficulty/index.html" ;
}

function sudoku(){
    window.location.href = "../Sudoku/Difficulty/index.html" ;
}

let n = localStorage.getItem("nickName")

function goback(){
    window.location.href = "../index.html";
}









var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../Audio/MainPage.mp3")




openingAudio.pause()
openingAudio.currentTime = time;
openingAudio.loop = true

let soundOfChoose = localStorage.getItem("sound")

window.onload = function(){
    if(soundPage=="false"){
        console.log("HOAJ")
        audio.src = "../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=3
        openingAudio.play()
    }
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



const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")
console.log(soundPage)


//audio


audio.onclick = function(){

    

    if(soundPage)
    {
        audio.src = "../Images/No Audio.png"
        localStorage.setItem("sound",false)
        soundPage = false
        openingAudio.pause()
    }
    else{
        audio.src = "../Images/Audio.png"
        localStorage.setItem("sound",true)
        soundPage = true
        openingAudio.currentTime = 4
        openingAudio.play()
    }
}

const h = document.querySelector(".heading")

