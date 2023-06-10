//Storin images amd their positions in variables//
let Box = document.getElementById("Box");
let Img1 = document.getElementById("img1");
let Img2 = document.getElementById("img2");
let Img3 = document.getElementById("img3");

let _1Top = 0;
let img1_Check = "down";

let _2Right = 0;
let img2_Check = "left";

let _3Left = 0;
let img3_Check = "right";

/*------------------------------------------*/

//Buttons//
let startBttn = document.getElementById("start-button");
let stopBttn = document.getElementById("stop-button");
let resetButtn = document.getElementById("reset-button");

/*------------------------------------------*/

//moving algorithm//
function MoveImage() {
    var boxWidth = Box.offsetWidth;
    var boxHeight = Box.offsetHeight;

    var img1Height = Img1.offsetHeight;
    var img2Width = Img2.offsetWidth;
    var img3Width = Img3.offsetWidth;

    //Moving TopImage process//
    if (img1_Check === "down") {
        _1Top += 30;
        
        if (_1Top + img1Height >= boxHeight) {
            img1_Check = "up";
        }
    }
    else {
        _1Top -= 30;

        if (_1Top <= 0) {
            img1_Check = "down";
        }
    }
    Img1.style.top = `${_1Top}px`;

    /*_____________________________________*/
    
    //Moving FlowerImage process//
    if (img2_Check === "left") {
        _2Right -= 30;
        if (_2Right <= 0) {
            img2_Check = "right";
        }
    } else {
        _2Right += 30;
        if (_2Right + img2Width >= boxWidth) {
            img2_Check = "left";
        }
    }
    Img2.style.right = `${_2Right}px`;

    /*_____________________________________*/

    //Moving ButterflyImage process//
    if (img3_Check === "right") {
        _3Left += 30;
        if (_3Left + img3Width >= boxWidth) {
            img3_Check = "left";
        }
    } else {
        _3Left -= 30;
        if (_3Left <= 0) {
            img3_Check = "right";
        }
    }
    Img3.style.left = `${_3Left}px`;
}

/*------------------------------------------*/

//start moving//
let timerID;
function start() {
    timerID = setInterval(() => {
        MoveImage();
        //show the positioning counter under the box//
        right.innerText = `<img src='icon2.jpg' right='${_2Right}'>`; 
        left.innerText = `<img src='icon3.jpg' left='${_3Left}'>`;
    }, 70);
}

/*------------------------------------------*/

//stop moving//
function stop() {
    clearInterval(timerID);
}

/*------------------------------------------*/

//Reset//
function reset() {
    _1Top = 0;
    img1_Check = "down";
    _2Right = 0;
    img2_Check = "left";
    _3Left = 0;
    img3_Check = "right";
    Img1.style.top = `${_1Top}px`;
    Img2.style.right = `${_2Right}px`;
    Img3.style.left = `${_3Left}px`;
}

/*------------------------------------------*/

//onclick events//
startBttn.addEventListener("click", () => {
    start();
    startBttn.disabled = "true";
    stopBttn.removeAttribute("disabled");
});

stopBttn.addEventListener("click", () => {
    stop();
    startBttn.removeAttribute("disabled");
    stopBttn.disabled = 'true';
});

resetButtn.addEventListener("click", reset);