function goback(){
    window.location.href = "../Difficulty/index.html";
}

function instructions(){
    window.location.href = "../Instructions/index.html";
}

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