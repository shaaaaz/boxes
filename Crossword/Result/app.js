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

window.onload = function(){
    startTimer()
}

function timerConvert(ms) {
	let minutes = Math.floor(ms / 60000);
	let seconds = Math.floor((ms % 60000) / 1000);
	return (seconds == 60)? (minutes + 1) + ':00' : minutes + ':' + ((seconds < 10)? '0' : '') + seconds;
}

function startTimer(){
	timer = setInterval(function() {
		seconds = seconds + 1000;
		document.getElementsByClassName('scoreValue')[0].innerText = timerConvert(seconds);
	}, 1000);
}
