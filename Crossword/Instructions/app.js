function goback(){
    window.location.href = "../Difficulty/index.html";
}

var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../../Audio/MainPage.mp3")

// console.log(time)

openingAudio.pause()
openingAudio.currentTime = time;
// openingAudio.play()

document.addEventListener("DOMContentLoaded", () => {
    const start = new Date().getTime();
    window.addEventListener("beforeunload", () => {
        var end = new Date().getTime();
        var totalTime = (end - start) / 1000

        totalTime += time

        totalTime = JSON.stringify(totalTime); 

        localStorage.removeItem('timeSpent')
        localStorage.setItem('timeSpent', totalTime);

        // console.log(totalTime)
    });
});

window.onload = function(){
    // startTimer()
    if(soundPage=="false"){
        // console.log("HOAJ")
        audio.src = "../../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=10
        openingAudio.play()
    }
}

const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")
// console.log(soundPage)

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