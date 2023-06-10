let image = document.images[0];

/*---------------------------------------------- */

//NEXT BUTTON//
let i = 1;
let next = document.getElementById("Nex"); 
next.onclick = () => {
    i++;

    i > 6 ? i = 6 : i; //6 is the number of images.

    image.src = `Images/${i}.jpg`; //change the src of image to the next one. "1.jpg" is the name of the first image.
}

/*---------------------------------------------- */

//PREVIOUS BUTTON
let prev = document.getElementById("prev");
prev.onclick = () => {
    i--;

    i > 6 ? i = 5 : i; 

    i < 1 ? i = 1 : i;

    image.src = `Images/${i}.jpg`;
}

/*---------------------------------------------- */

//SLIDESHOW BUTTON//
let sh = document.getElementById("ssh");
let timerID;

sh.onclick = () => {
    //if user clicks two times on the button, there are a new interval created without a n it(timerID),
    //and the one that already excuted(timerID) is lost but still work. so u need on each click on the button,
    //clear the interval if there is one.
    clearInterval(timerID);
    prev.disabled = true;
    next.disabled = true;
    timerID = setInterval(() => {
        i++;

        i > 6 ? i = 1 : i;

        image.src = `Images/${i}.jpg`;

    }, 1000);
}

/*---------------------------------------------- */

//STOP BUTTON//
let stopp = document.getElementById("stp"); 
stopp.onclick = () => {
    clearInterval(timerID);
    prev.disabled = false;
    next.disabled = false;
}