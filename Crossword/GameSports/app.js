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


const nadal1 = document.querySelector(".nadal1");
const nadal2 = document.querySelector(".nadal2");
const nadal3 = document.querySelector(".nadal3");
const nadal4 = document.querySelector(".nadal4");
const nadal5 = document.querySelector(".nadal5");

const kobe1 = document.querySelector(".kobe1");
const kobe2 = document.querySelector(".kobe2");
const kobe3 = document.querySelector(".kobe3");
const kobe4 = document.querySelector(".kobe4");

const tyson1 = document.querySelector(".tyson1");
const tyson2 = document.querySelector(".tyson2");
const tyson3 = document.querySelector(".tyson3");
const tyson4 = document.querySelector(".tyson4");
const tyson5 = document.querySelector(".tyson5");

const bolt1 = document.querySelector(".bolt1");
const bolt2 = document.querySelector(".bolt2");
const bolt3 = document.querySelector(".bolt3");
const bolt4 = document.querySelector(".bolt4");

const jordan1 = document.querySelector(".jordan1");
const jordan2 = document.querySelector(".jordan2");
const jordan3 = document.querySelector(".jordan3");
const jordan4 = document.querySelector(".jordan4");
const jordan5 = document.querySelector(".jordan5");
const jordan6 = document.querySelector(".jordan6");

const football1 = document.querySelector(".football1");
const football2 = document.querySelector(".football2");
const football3 = document.querySelector(".football3");
const football4 = document.querySelector(".football4");
const football5 = document.querySelector(".football5");
const football6 = document.querySelector(".football6");
const football7 = document.querySelector(".football7");
const football8 = document.querySelector(".football8");

const nehwal1 = document.querySelector(".nehwal1");
const nehwal2 = document.querySelector(".nehwal2");
const nehwal3 = document.querySelector(".nehwal3");
const nehwal4 = document.querySelector(".nehwal4");
const nehwal5 = document.querySelector(".nehwal5");
const nehwal6 = document.querySelector(".nehwal6");

const phelps1 = document.querySelector(".phelps1");
const phelps2 = document.querySelector(".phelps2");
const phelps3 = document.querySelector(".phelps3");
const phelps4 = document.querySelector(".phelps4");
const phelps5 = document.querySelector(".phelps5");
const phelps6 = document.querySelector(".phelps6");




const input1 = document.querySelector(".inputValue")

const check1 = document.querySelector(".check1")


check1.onclick = function(){
execute()
}
    
function execute(){
    var str =  input1.value
    str =  str.toLowerCase()
    localStorage.setItem("name",str)
    console.log(str)

    input1.value = ""

    if (str == 'nadal') {
        nadal1.innerHTML = "N";
        nadal2.innerHTML = "A";
        nadal3.innerHTML = "D";
        nadal4.innerHTML = "A";
        nadal5.innerHTML = "L";
        percent+=12.5
    } else if (str == 'kobe') {
        kobe1.innerHTML = "K";
        kobe2.innerHTML = "O";
        kobe3.innerHTML = "B";
        kobe4.innerHTML = "E";
        percent+=12.5
    } else if (str == 'tyson') {
        tyson1.innerHTML = "T";
        tyson2.innerHTML = "Y";
        tyson3.innerHTML = "S";
        tyson4.innerHTML = "O";
        tyson5.innerHTML = "N";
        percent+=12.5
    } else if (str == 'bolt') {
        bolt1.innerHTML = "B";
        bolt2.innerHTML = "O";
        bolt3.innerHTML = "L";
        bolt4.innerHTML = "T";
        percent+=12.5
    } else if (str == 'jordan') {
        jordan1.innerHTML = "J";
        jordan2.innerHTML = "O";
        jordan3.innerHTML = "R";
        jordan4.innerHTML = "D";
        jordan5.innerHTML = "A";
        jordan6.innerHTML = "N";
        percent+=12.5
    } else if (str == 'football') {
        football1.innerHTML = "F";
        football2.innerHTML = "O";
        football3.innerHTML = "O";
        football4.innerHTML = "T";
        football5.innerHTML = "B";
        football6.innerHTML = "A";
        football7.innerHTML = "L";
        football8.innerHTML = "L";
        percent+=12.5
    } else if (str == 'nehwal') {
        nehwal1.innerHTML = "N";
        nehwal2.innerHTML = "E";
        nehwal3.innerHTML = "H";
        nehwal4.innerHTML = "W";
        nehwal5.innerHTML = "A";
        nehwal6.innerHTML = "L";
        percent+=12.5
    } else if (str == 'phelps') {
        phelps1.innerHTML = "P";
        phelps2.innerHTML = "H";
        phelps3.innerHTML = "E";
        phelps4.innerHTML = "L";
        phelps5.innerHTML = "P";
        phelps6.innerHTML = "S";
        percent+=12.5
    }
    else{
        errors++
        console.log(errors)
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
    localStorage.setItem("percentCW3",percent)
    localStorage.setItem("errorsCW3",errors)
    localStorage.setItem("minsCW3",minutes)
    localStorage.setItem("secondsCW3",seconds)
    localStorage.setItem("movesCW3",moves)


    if(percent==100){
        click1()
    }
}
let n = localStorage.getItem("name")
console.log(n)
function checkStr(){
    
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
        openingAudio.currentTime=10
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


localStorage.setItem("percentCW3",percent)
    localStorage.setItem("errorsCW3",errors)
    localStorage.setItem("minsCW3",minutes)
    localStorage.setItem("secondsCW3",seconds)
    localStorage.setItem("movesCW3",moves)