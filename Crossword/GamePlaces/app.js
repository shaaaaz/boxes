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

const e1 = document.querySelector(".exit1")
const e2 = document.querySelector(".exit2")

const pa1 = document.querySelector(".again1")
const pa2 = document.querySelector(".again2")

function exit(){

    e1.style.display = "none"
    e2.style.backgroundColor = "#cacaca"

    window.location.reload()
}

function click1(){
    pa1.style.display = "none"
    pa2.style.backgroundColor = "#cacaca"
    window.location.href = "../Result/index.html";
}






const input1 = document.querySelector(".inputValue")

const check1 = document.querySelector(".check1")

const canada1 = document.querySelector(".canada1");
const canada2 = document.querySelector(".canada2");
const canada3 = document.querySelector(".canada3");
const canada4 = document.querySelector(".canada4");
const canada5 = document.querySelector(".canada5");
const canada6 = document.querySelector(".canada6");

const naples1 = document.querySelector(".naples1");
const naples2 = document.querySelector(".naples2");
const naples3 = document.querySelector(".naples3");
const naples4 = document.querySelector(".naples4");
const naples5 = document.querySelector(".naples5");
const naples6 = document.querySelector(".naples6");

const brazil1 = document.querySelector(".brazil1");
const brazil2 = document.querySelector(".brazil2");
const brazil3 = document.querySelector(".brazil3");
const brazil4 = document.querySelector(".brazil4");
const brazil5 = document.querySelector(".brazil5");
const brazil6 = document.querySelector(".brazil6");

const india1 = document.querySelector(".india1");
const india2 = document.querySelector(".india2");
const india3 = document.querySelector(".india3");
const india4 = document.querySelector(".india4");
const india5 = document.querySelector(".india5");

const newyork1 = document.querySelector(".newyork1");
const newyork2 = document.querySelector(".newyork2");
const newyork3 = document.querySelector(".newyork3");
const newyork4 = document.querySelector(".newyork4");
const newyork5 = document.querySelector(".newyork5");
const newyork6 = document.querySelector(".newyork6");
const newyork7 = document.querySelector(".newyork7");

const ethiopia1 = document.querySelector(".ethiopia1");
const ethiopia2 = document.querySelector(".ethiopia2");
const ethiopia3 = document.querySelector(".ethiopia3");
const ethiopia4 = document.querySelector(".ethiopia4");
const ethiopia5 = document.querySelector(".ethiopia5");
const ethiopia6 = document.querySelector(".ethiopia6");
const ethiopia7 = document.querySelector(".ethiopia7");
const ethiopia8 = document.querySelector(".ethiopia8");

const tokyo1 = document.querySelector(".tokyo1");
const tokyo2 = document.querySelector(".tokyo2");
const tokyo3 = document.querySelector(".tokyo3");
const tokyo4 = document.querySelector(".tokyo4");
const tokyo5 = document.querySelector(".tokyo5");

const paris1 = document.querySelector(".paris1");
const paris2 = document.querySelector(".paris2");
const paris3 = document.querySelector(".paris3");
const paris4 = document.querySelector(".paris4");
const paris5 = document.querySelector(".paris5");

const california1 = document.querySelector(".california1");
const california2 = document.querySelector(".california2");
const california3 = document.querySelector(".california3");
const california4 = document.querySelector(".california4");
const california5 = document.querySelector(".california5");
const california6 = document.querySelector(".california6");
const california7 = document.querySelector(".california7");
const california8 = document.querySelector(".california8");
const california9 = document.querySelector(".california9");
const california10 = document.querySelector(".california10");


check1.onclick = function(){
execute()
}
    
function execute(){
    var str =  input1.value
    str =  str.toLowerCase()
    localStorage.setItem("name",str)
    console.log(str)

    input1.value = ""

    if(str == 'canada')
    {
        canada1.innerHTML = "C"
        canada2.innerHTML = "A"
        canada3.innerHTML = "N";
        canada4.innerHTML = "A";
        canada5.innerHTML = "D";
        canada6.innerHTML = "A";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    }
    else if (str == 'naples') {
        naples1.innerHTML = "N";
        naples2.innerHTML = "A";
        naples3.innerHTML = "P";
        naples4.innerHTML = "L";
        naples5.innerHTML = "E";
        naples6.innerHTML = "S";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    }
    else if (str == 'brazil') {
        brazil1.innerHTML = "B";
        brazil2.innerHTML = "R";
        brazil3.innerHTML = "A";
        brazil4.innerHTML = "Z";
        brazil5.innerHTML = "I";
        brazil6.innerHTML = "L";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    } 
    else if (str == 'india') {
        india1.innerHTML = "I";
        india2.innerHTML = "N";
        india3.innerHTML = "D";
        india4.innerHTML = "I";
        india5.innerHTML = "A";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    } 
    else if (str == 'newyork') {
        newyork1.innerHTML = "N";
        newyork2.innerHTML = "E";
        newyork3.innerHTML = "W";
        newyork4.innerHTML = "Y";
        newyork5.innerHTML = "O";
        newyork6.innerHTML = "R";
        newyork7.innerHTML = "K";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    } 
    else if (str == 'ethiopia') {
        ethiopia1.innerHTML = "E";
        ethiopia2.innerHTML = "T";
        ethiopia3.innerHTML = "H";
        ethiopia4.innerHTML = "I";
        ethiopia5.innerHTML = "O";
        ethiopia6.innerHTML = "P";;
        ethiopia7.innerHTML = "I";
        ethiopia8.innerHTML = "A";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    } else if (str == 'tokyo') {
        tokyo1.innerHTML = "T";
        tokyo2.innerHTML = "O";
        tokyo3.innerHTML = "K";
        tokyo4.innerHTML = "Y";
        tokyo5.innerHTML = "O";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    }
    else if (str == 'paris') {
        paris1.innerHTML = "P";
        paris2.innerHTML = "A";
        paris3.innerHTML = "R";
        paris4.innerHTML = "I";
        paris5.innerHTML = "S";
        percent+=11
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    } 
    else if (str == 'california') {
        california1.innerHTML = "C";
        california2.innerHTML = "A";
        california3.innerHTML = "L";
        california4.innerHTML = "I";
        california5.innerHTML = "F";
        california6.innerHTML = "O";
        california7.innerHTML = "R";
        california8.innerHTML = "N";
        california9.innerHTML = "I";
        california10.innerHTML = "A";
        percent+=12
        if(soundPage){
            correctAudio.pause()
            correctAudio.currentTime = 0
            correctAudio.play()
        }
    }
    else{
        errors++
        console.log(errors)
        if(soundPage){
            wrongAudio.pause()
            wrongAudio.currentTime = 0
            wrongAudio.play()
        }
        let errdiv = document.querySelector(".errors")
        console.log("hi im here")
        errdiv.classList.add("changee")
            setTimeout(function () {
                errdiv.classList.toggle("changee")
            }, 2000);
    }
    moves++
    errNo.innerHTML = errors
    movesNo.innerHTML = moves
    localStorage.setItem("percentCW2",percent)
    localStorage.setItem("errorsCW2",errors)
    localStorage.setItem("minsCW2",minutes)
    localStorage.setItem("secondsCW2",seconds)
    localStorage.setItem("movesCW2",moves)

    if(percent==100){
        click1()
    }
}

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        execute()
    }
});

window.onload = function(){
    startTimer()
    if(soundPage=="false"){
        console.log("HOAJ")
        audio.src = "../../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=3
        openingAudio.play()
    }
}
let [minutes, seconds] = [0, 0]
let timeRef = document.querySelector(".timer");
let int = null;


function startTimer() {
    console.log("HELLOO")
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000);
}

function displayTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timeRef.innerHTML = `${m} : ${s}`;
}

let errors = 0
let moves = 0
let percent = 0
const errNo =  document.querySelector(".errNo")
const movesNo = document.querySelector(".movesNo")







const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")
console.log(soundPage)

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

localStorage.setItem("percentCW2",percent)
    localStorage.setItem("errorsCW2",errors)
    localStorage.setItem("minsCW2",minutes)
    localStorage.setItem("secondsCW2",seconds)
    localStorage.setItem("movesCW2",moves)

    const correctAudio = new Audio("../../Audio/correctSound.mp3")
const wrongAudio = new Audio("../../Audio/wrongSound.mp3")