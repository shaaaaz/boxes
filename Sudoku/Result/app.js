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

const openingAudio = new Audio("../../Audio/Gonna Fly Now.mp3")

time = 0

openingAudio.pause()
openingAudio.currentTime = 1;

window.onload = function(){
    openingAudio.play()

}





let percent = localStorage.getItem("percent")
let errors = localStorage.getItem("errors")
let mins = localStorage.getItem("mins")
let seconds = localStorage.getItem("seconds")

console.log(percent,errors,mins,seconds)

// let percent =99
// let mins = 4
// let seconds =56
// let errors = 56

pDisplay = document.querySelector(".perc")

if(percent<20){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. Looks like you have not enjoyed Sudoku. How about you try Crossword instead?`
}
else if(percent<40){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. Try to focus more and you will achieve it!`
}
else if(percent<60){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. This proves you have a lot of potential. You could do better!`
}
else if(percent<80){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. Its like numbers are easy for you. Keep up the good work!`
}
else if(percent<90){
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right. WOW! That was a fabulous display of your Concentration and Thinking skills`
}
else{
    pDisplay.innerHTML = `You have got <span class="red">${percent}</span> percent of the crossword right.That was just SPECTACULAR! A great victory over number!!!`
}

const t = document.querySelector(".time")

t.innerHTML = `Time taken for you to solve the puzzle is <span class="red">${mins}</span> minutes and <span class="red">${seconds}</span> seconds.</span>`

const err = document.querySelector(".error")

err.innerHTML = `No of errors commited are - <span class="red">${errors}</span>`