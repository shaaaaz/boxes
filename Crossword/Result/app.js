const e1 = document.querySelector(".exit1")
const e2 = document.querySelector(".exit2")

const pa1 = document.querySelector(".again1")
const pa2 = document.querySelector(".again2")

function exit(){

    e1.style.display = "none"
    e2.style.backgroundColor = "#B7B7B7"

    window.close()
}

function click1(){
    pa1.style.display = "none"
    pa2.style.backgroundColor = "#B7B7B7"
    window.location.href = "../Difficulty/index.html";
}

