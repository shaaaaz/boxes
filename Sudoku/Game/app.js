function goback() {
    window.location.href = "../Difficulty/index.html";
}

function instructions() {
    window.location.href = "../Instructions/index.html";
}

var time = window.localStorage.getItem('timeSpent');
time = parseFloat(time)

const openingAudio = new Audio("../../Audio/MainPage.mp3")

// console.log(time)



document.addEventListener("DOMContentLoaded", () => {
    const start = new Date().getTime();
    window.addEventListener("beforeunload", () => {
        var end = new Date().getTime();
        var totalTime = (end - start) / 1000

        totalTime += time

        totalTime = JSON.stringify(totalTime);

        localStorage.removeItem('timeSpent')
        localStorage.setItem('timeSpent', totalTime);

        // console.log(totalTime)
    });
});


let countOfEmpty = 81
let countOfDone = 0


/*

MAIN GAME

*/

var numSelected = null;
var tileSelected = null;

var errors = 0;



// var board = [
//     "--74916-5",
//     "2---6-3-9",
//     "-----7-1-",
//     "-586----4",
//     "--3----9-",
//     "--62--187",
//     "9-4-7---2",
//     "67-83----",
//     "81--45---"
// ]

// var solution = [
//     "387491625",
//     "241568379",
//     "569327418",
//     "758619234",
//     "123784596",
//     "496253187",
//     "934176852",
//     "675832941",
//     "812945763"
// ]
















var boardMatrixEasy = [
    [
        "--4--3---",
        "-976-1---",
        "31-58----",
        "-723--9--",
        "-658-437-",
        "--8--942-",
        "----65-19",
        "---2-765-",
        "---1--2--"
    ],
    [
        "1-4------",
        "8----21--",
        "-79831---",
        "4-2-7-8-3",
        "9-3---4-6",
        "7-8-6-9-1",
        "---78536-",
        "--69----5",
        "------2-9"
    ],
    [
        "--46---7-",
        "92---7---",
        "3-78-1-6-",
        "--8-7-29-",
        "---1-3---",
        "-35-9-4--",
        "-8-7-53-9",
        "---3---41",
        "-6---48--"
    ],
    [
        "2----46--",
        "14-8--2-5",
        "8-5--3---",
        "----37-9-",
        "--31864--",
        "-1-92----",
        "---7--8-4",
        "9-1--8-23",
        "--23----7"
    ],
    [
        "4---25-71",
        "-92--3-5-",
        "--1----8-",
        "----1-54-",
        "6--579--2",
        "-59-4----",
        "-8----4--",
        "-1-4--32-",
        "37-86---5"
    ],
    [
        "--4296---",
        "9-----7-4",
        "----84-9-",
        "758----39",
        "---8-1---",
        "16----548",
        "-8-62----",
        "6-7-----2",
        "---5738--"
    ],
    [
        "1-79---3-",
        "54-----87",
        "--617-4-9",
        "-5---78-3",
        "-94---67-",
        "7-86---9-",
        "9-1-637--",
        "46-----21",
        "-7--149-5"
    ],
    [
        "4-9-5-36-",
        "-6-9-4-5-",
        "--7-369--",
        "------1-8",
        "5--879--6",
        "2-4------",
        "--529-4--",
        "-4-3-7-1-",
        "-12-8-6-9"
    ],
    [
        "5-------4",
        "-7---2-93",
        "-6--49-28",
        "--5-18---",
        "1876-3945",
        "---59-2--",
        "25-87--3-",
        "64-9---7-",
        "7-------9"
    ],
    [
        "---35---4",
        "-6--7---9",
        "-58-6-327",
        "62-1--74-",
        "-8-2-4-1-",
        "-31--6-95",
        "572-1-43-",
        "9---2--8-",
        "8---43---"
    ]
]

var solutionMatrixEasy = [
    [
        "584973162",
        "297641538",
        "316582794",
        "472316985",
        "965824371",
        "138759426",
        "723465819",
        "841297653",
        "659138247"
    ],
    [
        "124597638",
        "835642197",
        "679831542",
        "462179853",
        "913258476",
        "758463921",
        "291785364",
        "386924715",
        "547316289"
    ],
    [
        "814639572",
        "926457138",
        "357821964",
        "148576293",
        "692143785",
        "725298416",
        "481765329",
        "579765329",
        "263914857"
    ],
    [
        "239574681",
        "147869235",
        "865213749",
        "528437196",
        "793186452",
        "614925378",
        "356792824",
        "971648523",
        "482351967"
    ],
    [
        "438625971",
        "792183654",
        "561794283",
        "827316549",
        "643579812",
        "159248736",
        "285931467",
        "916457328",
        "374862195"
    ],
    [
        "874296315",
        "926315784",
        "315784296",
        "758462139",
        "493851627",
        "162937548",
        "581629473",
        "673148952",
        "249573861"
    ],
    [
        "187945236",
        "549326187",
        "236178459",
        "652497813",
        "394851672",
        "718632594",
        "921563748",
        "465789321",
        "873214965"
    ],
    [
        "429758361",
        "163924857",
        "857136924",
        "796542138",
        "531879246",
        "284613795",
        "675291483",
        "948367512",
        "312485679"
    ],
    [
        "592386714",
        "874152693",
        "361749528",
        "925418367",
        "187623945",
        "436597281",
        "259871436",
        "648935172",
        "713264859"
    ],
    [
        "297351864",
        "364872159",
        "158469327",
        "629135748",
        "785294613",
        "431786295",
        "572918436",
        "943627581",
        "816543972"
    ]

]

var boardMatrixMedium = [
    [
        "--5-6---3",
        "-2-4--8--",
        "-----72--",
        "-98-2---6",
        "---6-8---",
        "1---7-94-",
        "--92-----",
        "--4--9-5-",
        "7---5-4--"
    ],
    [
        "18--4--6-",
        "--2--19--",
        "6---7--2-",
        "---1-9-5-",
        "----2----",
        "-1-5-8---",
        "-9--1---6",
        "--57--3--",
        "-6--8--49"
    ],
    [
        "-1-7-6--5",
        "9---5---1",
        "4----89--",
        "---86-2--",
        "--3---1--",
        "--9-25---",
        "--26----9",
        "7---8---4",
        "1--9-7-6-"
    ],
    [
        "-8--73---",
        "-52-4----",
        "--4--23-8",
        "---1-----",
        "47-----29",
        "-----7---",
        "5-14--9--",
        "----2-54-",
        "---78--6-"
    ],
    [
        "--7--6---",
        "9--7156-3",
        "-5-------",
        "76--4--28",
        "----8----",
        "89--5--41",
        "-------1-",
        "4-1378--9",
        "---5--8--"
    ],
    [
        "-8-4--1-7",
        "3--28--4-",
        "-------39",
        "85--6-4--",
        "---------",
        "--4-1--95",
        "59-------",
        "-2--75--1",
        "4-7--3-8-"
    ],
    [
        "73-------",
        "-8--9----",
        "--6--4--3",
        "--93-56--",
        "6-89-73-2",
        "--71-24--",
        "2--6--7--",
        "----5--3-",
        "-------86"
    ],
    [
        "-62------",
        "-----718-",
        "---82-3--",
        "2--4--7-1",
        "51-----63",
        "7-6--9--4",
        "--8-41---",
        "-732-----",
        "------23-"
    ],
    [
        "---17----",
        "4------31",
        "--3-489--",
        "-8----75-",
        "----8----",
        "-71----2-",
        "--486-1--",
        "86------5",
        "----54---"
    ],
    [
        "---79-5--",
        "-9--5--1-",
        "---268---",
        "-76-----3",
        "21-----75",
        "5-----84-",
        "---817---",
        "-6--4--8-",
        "--7-29---"
    ],
]

var solutionMatrixMedium = [
    [
        "845962173",
        "927413865",
        "316587294",
        "598124736",
        "473698512",
        "162375948",
        "659241387",
        "284739651",
        "731856429"
    ],
    [
        "183942765",
        "472651983",
        "659873124",
        "824139657",
        "526427891",
        "917568432",
        "398214576",
        "245796318",
        "761385249"
    ],
    [
        "218796435",
        "967354821",
        "435218976",
        "541863297",
        "623479158",
        "879125643",
        "352641789",
        "796582314",
        "184937562"
    ],
    [
        "186573492",
        "352849716",
        "794612358",
        "238194675",
        "475368129",
        "619257834",
        "521436987",
        "867921543",
        "943785261"
    ],
    [
        "187236495",
        "942715683",
        "356894172",
        "765143928",
        "214987356",
        "893652741",
        "538469217",
        "421378569",
        "679521834"
    ],
    [
        "985436127",
        "371289546",
        "246157839",
        "859762413",
        "132945768",
        "764318295",
        "598621374",
        "623874951",
        "417593682"
    ],
    [
        "732816945",
        "584293167",
        "196574823",
        "429385671",
        "618947352",
        "357162498",
        "245638719",
        "861759234",
        "973421586"
    ],
    [
        "862134597",
        "345697182",
        "197825346",
        "289463751",
        "514782963",
        "736519824",
        "928341675",
        "673258419",
        "451976238"
    ],
    [
        "698173542",
        "427596831",
        "513248967",
        "386921754",
        "245687319",
        "971435628",
        "754862193",
        "862319475",
        "139754286"
    ],
    [
        "684791532",
        "792354618",
        "153268794",
        "476985123",
        "218436975",
        "539172846",
        "315817469",
        "961543287",
        "847629351"
    ],
]

var boardMatrixHard = [
    [
        "6-2--145-",
        "--3------",
        "-9--2---1",
        "-6--982--",
        "---2-5---",
        "--734--9-",
        "5---1--3-",
        "------1--",
        "-214--9-5"
    ],
    [
        "----4-6-5",
        "7-----9--",
        "683------",
        "1---598--",
        "--6---4--",
        "--846---2",
        "------791",
        "--9-----4",
        "3-1-9----"
    ],
    [
        "-63-7----",
        "7-----142",
        "1-45-----",
        "-26-81---",
        "---------",
        "---64-29-",
        "-----53-4",
        "637-----9",
        "----6-82-"
    ],
    [
        "-42---3-5",
        "-----2---",
        "8-----2-6",
        "9---1-46-",
        "---9-6---",
        "-87-3---2",
        "2-9-----8",
        "---5-----",
        "3-6---12-"
    ],
    [
        "-6----8-4",
        "2--4-8---",
        "-7---5---",
        "-42--6-8-",
        "--7-5-1--",
        "-8-7--54-",
        "---3---2-",
        "---6-7--8",
        "7-1----6-"
    ],
    [
        "-6---8-9-",
        "----4----",
        "85---21--",
        "-----174-",
        "-81---52-",
        "-725-----",
        "--92---74",
        "----7----",
        "-1-3---5-"
    ],
    [
        "-----38-6",
        "4-71-8--9",
        "-6------7",
        "------1--",
        "84-9-2-73",
        "--6------",
        "6------2-",
        "7--3-65-1",
        "2-98-----"
    ],
    [
        "-3-5-86--",
        "---9---34",
        "1---3----",
        "-9-----82",
        "6-1---4-9",
        "32-----1-",
        "----7---8",
        "27---5---",
        "--32-1-6-"
    ],
    [
        "----5---3",
        "-----9--7",
        "---14-6--",
        "68-9---15",
        "--1---3--",
        "34---7-69",
        "--6-81---",
        "5--6-----",
        "2---7----"
    ],
    [
        "5----6--7",
        "---45--3-",
        "-6---39--",
        "------7-4",
        "2-8---3-6",
        "1-6------",
        "--31---6-",
        "-2--89---",
        "6--3----2"
    ]
]

var solutionMatrixHard = [
    [
        "672981453",
        "153764829",
        "498523671",
        "365198247",
        "984275316",
        "217346598",
        "546819732",
        "739652184",
        "821437965"
    ],
    [
        "912347685",
        "754682913",
        "683915247",
        "147259836",
        "236178459",
        "598463172",
        "425836791",
        "879521364",
        "361794528"
    ],
    [
        "263174958",
        "759836142",
        "184592736",
        "326981475",
        "941257683",
        "578643291",
        "892715364",
        "637428519",
        "415369827"
    ],
    [
        "742691385",
        "563842791",
        "891357246",
        "935218467",
        "124976853",
        "687435912",
        "279164538",
        "418523679",
        "356789124"
    ],
    [
        "965213874",
        "213478659",
        "478965231",
        "542196387",
        "637854192",
        "189732546",
        "896341725",
        "354627918",
        "721589463"
    ],
    [
        "163758492",
        "927143658",
        "854962137",
        "395621748",
        "681427529",
        "472589361",
        "539216874",
        "246875913",
        "718394256"
    ],
    [
        "592473816",
        "437168259",
        "168295437",
        "975634182",
        "841952673",
        "326781945",
        "613549728",
        "784326591",
        "259827364"
    ],
    [
        "734528691",
        "852916734",
        "169734825",
        "495167382",
        "681352479",
        "327849516",
        "916473258",
        "278695143",
        "543281967"
    ],
    [
        "164758923",
        "853269147",
        "927143658",
        "682934715",
        "719526384",
        "345817269",
        "476381592",
        "538692471",
        "219475836"
    ],
    [
        "531896247",
        "987452631",
        "462713985",
        "395269714",
        "248571396",
        "176934528",
        "853127469",
        "724689153",
        "619345872"
    ],
]

const correctAudio = new Audio("../../Audio/correctSound.mp3")
const wrongAudio = new Audio("../../Audio/wrongSound.mp3")

// console.log(boardMatrixEasy[0])
// var board = boardMatrixEasy[1]
// var solution = solutionMatrixEasy[1]
// console.log(board)

// let num = Math.floor(Math.random()*9)

    let num = Math.floor(Math.random()*10)

    let pre = localStorage.getItem("previous")

    if(pre==num){
        let num = Math.floor(Math.random()*10)
    }

    let diff = localStorage.getItem("sudokuDifficulty")
    diff=parseInt(diff)
    // console.log(diff)
    if(diff==1)
    {
        var board = boardMatrixEasy[num]
        var solution = solutionMatrixEasy[num]
    }
    else if(diff==2)
    {
        var board = boardMatrixMedium[num]
        var solution = solutionMatrixMedium[num]
    }
    else if(diff==3)
    {
        var board = boardMatrixHard[num]
        var solution = solutionMatrixHard[num]
    }

    

    localStorage.setItem("board",board)
    localStorage.setItem("solution",solution)

    // console.log(num)
    // console.log[board]
    // console.log[solution]






















window.onload = function () {
    console.log(soundPage)
    if(soundPage=="true"){
        openingAudio.currentTime=0
        openingAudio.play()
    }
    else{
        audio.src = "../../Images/No Audio.png"

    }

startTimer()
    // openingAudio.pause()
    openingAudio.currentTime = 10;



    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;

        number.classList.add("number");
        document.querySelector("#digits").appendChild(number);


        number.addEventListener("click", selectNumber);
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();

            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
                countOfEmpty--
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (r == 3 || r == 6) {
                tile.classList.add("row-border")
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            if (c == 3 || c == 6) {
                tile.classList.add("column-border")
            }

            tile.classList.add("tile");
            document.getElementById("board").append(tile);


            tile.addEventListener("click", selectTile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        let coordinate = this.id.split("-");
        let r = parseInt(coordinate[0]);
        let c = parseInt(coordinate[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            this.classList.add("green")
            setTimeout(() => {
                this.classList.remove("green");
                this.style.color = "#000";
            }, 2000);
            
            countOfDone++

            if(soundPage){
                correctAudio.pause()
                correctAudio.currentTime = 0
                correctAudio.play()
            }

            

        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
            if(soundPage){
                wrongAudio.pause()
                wrongAudio.currentTime = 0
                wrongAudio.play()
            }
            document.getElementById("err").classList.add("changee")
            setTimeout(function () {
                document.getElementById("err").classList.remove("changee")
            }, 2000);

        }
    }
    // console.log(countOfEmpty)
}

const reload = document.querySelector(".newGame")
reload.onclick = function () {
    window.location.reload()
}

const pa1 = document.querySelector(".again1")
const pa2 = document.querySelector(".again2")

function click1() {
    pa1.style.display = "none"
    pa2.style.backgroundColor = "#B7B7B7"
    calculatePercent()
    window.location.href = "../Result/index.html";
}



let [minutes, seconds] = [0, 0]
let timeRef = document.querySelector(".scoreValue");
let int = null;


function startTimer() {
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


let finalPercent = 0

function calculatePercent(){
    // console.log(countOfDone)
    // console.log(countOfEmpty)

    finalPercent = (countOfDone / countOfEmpty)*100

    finalPercent = finalPercent*100
    finalPercent = parseInt(finalPercent)
    finalPercent = finalPercent/100

    localStorage.setItem("percent",finalPercent)
    localStorage.setItem("errors",errors)
    localStorage.setItem("mins",minutes)
    localStorage.setItem("seconds",seconds)

    localStorage.setItem("previous",num)

}




const audio = document.querySelector(".audio-img")

let soundPage = localStorage.getItem("sound")
// console.log(soundPage)

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

// let count =0

// document.addEventListener('DOMContentLoaded', function() {
//     if(soundPage){
//     openingAudio.pause()
//     openingAudio.currentTime = 10
//     openingAudio.play()
//     }
// });