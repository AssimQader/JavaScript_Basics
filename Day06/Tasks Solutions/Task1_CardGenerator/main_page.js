let bttn = document.getElementById("bttn"); //Generate button.
let radios = document.getElementsByName("Card"); //array of radios buttons.
let images = document.images; //array of all images in main.html file.
let message = document.getElementById("tx");


let win;
let choosenImg;

//create the whole new page with all HTML tages and CSS styling only from here, the JS file// 
bttn.onclick = function () {

    win = open("", "", "width=500,height=400");  //open new page on the fly(_blank page).
    
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            choosenImg = images[i];
        }
    }

    win.document.body.style.backgroundColor = "pink";

    //create the image and append it to the blank page//
    let blankImg = win.document.createElement('img');
    blankImg.src = choosenImg.src;
    blankImg.style.width = '250px';
    blankImg.style.height = '250px';
    blankImg.style.marginLeft = '115px';
    win.document.body.appendChild(blankImg);


//create the message and append it to the blank page//
    let blankMsg = win.document.createElement('h2');
    blankMsg.innerText = message.value;
    win.document.body.appendChild(blankMsg);
    blankMsg.style.fontFamily = 'cursive';
    blankMsg.style.color = 'cadetblue'
    blankMsg.style.textAlign = 'center';


    //create the button and append it to the blank page//
    let blankbttn = win.document.createElement('input');
    blankbttn.type = 'button';
    blankbttn.value = 'Close Preview'
    win.document.body.appendChild(blankbttn);
    blankbttn.style.marginLeft = '190px';

    blankbttn.addEventListener('click', () => {
        win.close();
    });
}