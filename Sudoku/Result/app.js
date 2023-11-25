// create an animation like ffect when the button is clicked

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


// load the audio file

const openingAudio = new Audio("../../Audio/Gonna Fly Now.mp3")

time = 0

openingAudio.pause()
openingAudio.currentTime = 1;

window.onload = function(){
    openingAudio.play()

}


// get the values from previous page using local storage


let percent = localStorage.getItem("percent")
let errors = localStorage.getItem("errors")
let mins = localStorage.getItem("mins")
let seconds = localStorage.getItem("seconds")

// diffrent statements that will be dispaleyd according to the score that user has got

pDisplay = document.querySelector(".perc")

if(percent<20){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the sudoku right. Looks like you have not enjoyed Sudoku. How about you try Crossword instead?`
}
else if(percent<40){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the sudoku right. Try to focus more and you will achieve it!`
}
else if(percent<60){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the sudoku right. This proves you have a lot of potential. You could do better!`
}
else if(percent<80){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the sudoku right. Its like numbers are easy for you. Keep up the good work!`
}
else if(percent<90){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the sudoku right. WOW! That was a fabulous display of your Concentration and Thinking skills`
}
else{
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the sudoku right.That was just SPECTACULAR! A great victory over number!!!`
}


// display these scores on the hml page

const t = document.querySelector(".time")

t.innerHTML = `Time taken for you to solve the puzzle is <span class="red">${mins}</span> minutes and <span class="red">${seconds}</span> seconds.</span>`

const err = document.querySelector(".error")

err.innerHTML = `No of errors commited are - <span class="red">${errors}</span>`



// play audio when windows is loaded

window.onload = function(){
    if(soundPage=="false"){
        audio.src = "../../Images/No Audio.png"
    }
    else{
        openingAudio.currentTime=10
        openingAudio.play()
    }
}


const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")




// functionaliy of the audio on off button

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

