const e1 = document.querySelector(".exit1")
const e2 = document.querySelector(".exit2")

const pa1 = document.querySelector(".again1")
const pa2 = document.querySelector(".again2")

function exit(){

    e1.style.display = "none"
    e2.style.backgroundColor = "#B7B7B7"

    window.location.href = "../../index.html"
}

function click1(){
    pa1.style.display = "none"
    pa2.style.backgroundColor = "#B7B7B7"
    window.location.href = "../Difficulty/index.html";
}





var theme = localStorage.getItem("ThemeChoosen")

console.log(theme)

var percent = 0
var errors = 0
var mins = 0
var seconds = 0
var moves = 0

if(theme==1){
    percent = localStorage.getItem("percentCW1")
    errors = localStorage.getItem("errorsCW1")
    mins = localStorage.getItem("minsCW1")
    seconds = localStorage.getItem("secondsCW1")
    moves = localStorage.getItem("movesCW1")
}
else if(theme==2){
percent = localStorage.getItem("percentCW2")
    errors = localStorage.getItem("errorsCW2")
    mins = localStorage.getItem("minsCW2")
    seconds = localStorage.getItem("secondsCW2")
    moves = localStorage.getItem("movesCW2")
}
else{
    percent = localStorage.getItem("percentCW3")
    errors = localStorage.getItem("errorsCW3")
    mins = localStorage.getItem("minsCW3")
    seconds = localStorage.getItem("secondsCW3")
    moves = localStorage.getItem("movesCW3")
}


















const openingAudio = new Audio("../../Audio/Gonna Fly Now.mp3")



openingAudio.pause()
openingAudio.currentTime = 1;

window.onload = function(){
    // startTimer()
    if(soundPage=="false"){
        console.log("HOAJ")
        audio.src = "../../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=0
        openingAudio.play()
    }
}


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





// console.log(percent,errors,mins,seconds,moves)

// let percent =99
// let mins = 4
// let seconds =56
// let errors = 56

pDisplay = document.querySelector(".perc")

if(percent<20){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. Looks like you have not enjoyed Crossword. How about you try Sudoku instead?`
}
else if(percent<40){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. Try to focus more and you will achieve it!`
}
else if(percent<60){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. This proves you have a lot of potential. You could do better!`
}
else if(percent<80){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. Its like crosswords are easy for you. Keep up the good work!`
}
else if(percent<90){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. WOW! That was a fabulous display of your Vocabulary, General Knowledge and Thinking skills`
}
else{
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right.That was just SPECTACULAR! A great victory over crosswords!!!`
}

const t = document.querySelector(".time")

t.innerHTML = `Time taken for you to solve the puzzle is <span class="red">${mins}</span> minutes and <span class="red">${seconds}</span> seconds.</span>`

const err = document.querySelector(".error")

err.innerHTML = `No of errors commited are - <span class="red">${errors}</span> & No of Moves taken are - <span class="red">${moves}</span>`