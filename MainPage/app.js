console.log("HELLO")

const b = document.querySelector(".startRec2")

const shift = document.querySelector(".startRec1")

function start(){
    shift.style.backgroundColor = "#00000000"
    shift.style.color = "#00000000"
    
    b.style.backgroundColor = "#818181"
    window.location.href = "./ChooseCorS/index.html";

}

function over(){
    shift.style.backgroundColor = "#00000000"
    shift.style.color = "#00000000"
    
    b.style.backgroundColor = "#818181"
}

function leave(){
    shift.style.backgroundColor = "#818181"
    shift.style.color = "#FFF"

    b.style.backgroundColor = ""
}