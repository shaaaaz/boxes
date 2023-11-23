console.log("HELLO")

const b = document.querySelector(".startRec2")

const shift = document.querySelector(".startRec1")

function start(){
    const name1 = document.querySelector(".nameIn")
    const nick =  document.querySelector(".nickIn")

    var n = name1.value
    var n2 = nick.value
      
console.log("n=",n,n2)
    if(n=="" || n2==""){
        console.log("again")
        alert("Please make sure you have entered your name and nickname to proceed :)");}

    else{ 
        shift.style.backgroundColor = "#00000000"
        shift.style.color = "#00000000"
        
        b.style.backgroundColor = "#818181"
        

    

    localStorage.setItem("name",n)
    localStorage.setItem("nickName",n2) 
    
        window.location.href = "./ChooseCorS/index.html";}
    // }
    // else{
    //     console.log("again")
    //     alert("Please make sure you have entered your name and nickname to proceed :)");
    // }

}

function over(){
    if(n=="" && n2==""){
    shift.style.backgroundColor = "#00000000"
    shift.style.color = "#00000000"
    
    b.style.backgroundColor = "#818181"}
}

function leave(){
    shift.style.backgroundColor = "#818181"
    shift.style.color = "#FFF"

    b.style.backgroundColor = ""
}


const openingAudio = new Audio("./Audio/MainPage.mp3")

time = 0



// window.onload = function(){
    

// }

document.addEventListener("DOMContentLoaded", () => {
    const start = new Date().getTime();
    openingAudio.pause();
    openingAudio.currentTime = time;
    openingAudio.play()
    window.addEventListener("beforeunload", () => {
        var end = new Date().getTime();
        var totalTime = (end - start) / 1000

        totalTime = JSON.stringify(totalTime); 

        localStorage.removeItem('timeSpent')
        localStorage.setItem('timeSpent', totalTime);
    });
});


localStorage.setItem('sound', true);

