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

window.onload = function(){
    startTimer()
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


const brad1 = document.querySelector(".brad1")
const brad2 = document.querySelector(".brad2");
const brad3 = document.querySelector(".brad3");
const brad4 = document.querySelector(".brad4");

const heath1 = document.querySelector(".heath1");
const heath2 = document.querySelector(".heath2");
const heath3 = document.querySelector(".heath3");
const heath4 = document.querySelector(".heath4");
const heath5 = document.querySelector(".heath5");

const emma1 = document.querySelector(".emma1");
const emma2 = document.querySelector(".emma2");
const emma3 = document.querySelector(".emma3");
const emma4 = document.querySelector(".emma4");

const tyler1 = document.querySelector(".tyler1");
const tyler2 = document.querySelector(".tyler2");
const tyler3 = document.querySelector(".tyler3");
const tyler4 = document.querySelector(".tyler4");
const tyler5 = document.querySelector(".tyler5");

const swades1 = document.querySelector(".swades1");
const swades2 = document.querySelector(".swades2");
const swades3 = document.querySelector(".swades3");
const swades4 = document.querySelector(".swades4");
const swades5 = document.querySelector(".swades5");
const swades6 = document.querySelector(".swades6");

const damien1 = document.querySelector(".damien1");
const damien2 = document.querySelector(".damien2");
const damien3 = document.querySelector(".damien3");
const damien4 = document.querySelector(".damien4");
const damien5 = document.querySelector(".damien5");
const damien6 = document.querySelector(".damien6");

const waiter1 = document.querySelector(".waiter1");
const waiter2 = document.querySelector(".waiter2");
const waiter3 = document.querySelector(".waiter3");
const waiter4 = document.querySelector(".waiter4");
const waiter5 = document.querySelector(".waiter5");
const waiter6 = document.querySelector(".waiter6");


const tamasha1 = document.querySelector(".tamasha1");
const tamasha2 = document.querySelector(".tamasha2");
const tamasha3 = document.querySelector(".tamasha3");
const tamasha4 = document.querySelector(".tamasha4");
const tamasha5 = document.querySelector(".tamasha5");
const tamasha6 = document.querySelector(".tamasha6");
const tamasha7 = document.querySelector(".tamasha7");


const hirani1 = document.querySelector(".hirani1");
const hirani2 = document.querySelector(".hirani2");
const hirani3 = document.querySelector(".hirani3");
const hirani4 = document.querySelector(".hirani4");
const hirani5 = document.querySelector(".hirani5");
const hirani6 = document.querySelector(".hirani6");

const race1 = document.querySelector(".race1");
const race2 = document.querySelector(".race2");
const race3 = document.querySelector(".race3");
const race4 = document.querySelector(".race4");




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

    if(str == 'brad')
    {
        brad1.innerHTML = "B"
        brad2.innerHTML = "R"
        brad3.innerHTML = "A"
        brad4.innerHTML = "D"
        percent += 10
    }
    else if(str == 'heath'){
        heath1.innerHTML = "H"
        heath2.innerHTML = "E"
        heath3.innerHTML = "A"
        heath4.innerHTML = "T"
        heath5.innerHTML = "H"
        percent += 10
    }
    else if(str == 'emma')
    {
        emma1.innerHTML = "E"
        emma2.innerHTML = "M"
        emma3.innerHTML = "M"
        emma4.innerHTML = "A"
        percent += 10
    }
    else if(str=='tyler'){
        tyler1.innerHTML = "T"
        tyler2.innerHTML = "Y"
        tyler3.innerHTML = "L"
        tyler4.innerHTML = "E"
        tyler5.innerHTML = "R"
        percent += 10
    }
    else if(str=='swades'){
        swades1.innerHTML = "S"
        swades2.innerHTML = "W"
        swades3.innerHTML = "A"
        swades4.innerHTML = "D"
        swades5.innerHTML = "E"
        swades6.innerHTML = "S"
        percent += 10
    }
    else if(str=='damien'){
        damien1.innerHTML = "D"
        damien2.innerHTML = "A"
        damien3.innerHTML = "M"
        damien4.innerHTML = "I"
        damien5.innerHTML = "E"
        damien6.innerHTML = "N"
        percent += 10
    }
    else if(str == 'waiter'){
        waiter1.innerHTML = "W"
        waiter2.innerHTML = "A"
        waiter3.innerHTML = "I"
        waiter4.innerHTML = "T"
        waiter5.innerHTML = "E"
        waiter6.innerHTML = "R"
        percent += 10
    }
    else if(str=='tamasha'){
        tamasha1.innerHTML = "T"
        tamasha2.innerHTML = "A"
        tamasha3.innerHTML = "M"
        tamasha4.innerHTML = "A"
        tamasha5.innerHTML = "S"
        tamasha6.innerHTML = "H"
        tamasha7.innerHTML = "A"
        percent += 10
    }
    else if(str=='hirani'){
        hirani1.innerHTML="H"
        hirani2.innerHTML="I"
        hirani3.innerHTML="R"
        hirani4.innerHTML="A"
        hirani5.innerHTML="N"
        hirani6.innerHTML="I"
        percent += 10
    }
    else if(str == 'race'){
        race1.innerHTML = "R"
        race2.innerHTML = "A"
        race3.innerHTML = "C"
        race4.innerHTML = "E"
        percent += 10
    }
    else{
        errors++
        console.log(errors)
    }
    moves++
    errNo.innerHTML = errors
    movesNo.innerHTML = moves
    localStorage.setItem("percentCW1",percent)
    localStorage.setItem("errorsCW1",errors)
    localStorage.setItem("minsCW1",minutes)
    localStorage.setItem("secondsCW1",seconds)
    localStorage.setItem("movesCW1",moves)
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

