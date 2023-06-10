let im = document.images;  //collection of images.
let fig = document.getElementById("figures");

let iterator = 0;

im[0].src = "Images/marble3.jpg";
function marbleing()
{
    iterator++;
    if (iterator > 4) {
        im[0].src = "Images/marble3.jpg";
        im[im.length - 1].src = "Images/marble1.jpg";
        iterator = 0;
    }
    im[iterator].src = "Images/marble3.jpg";
    im[iterator - 1].src = "Images/marble1.jpg"; 
}


//Start Merbling//
let timerID;
fig.onmouseleave = () => {
    clearInterval(timerID);
    timerID = setInterval(() => {
        marbleing();
    }, 500);
}


//Stop Merbling//
fig.onmouseenter = () => {
    clearInterval(timerID);
}


























//  im[i].src = "Images/marble3.jpg"; //uncolor the current img.

// let timerID;
// im[i].onmouseout = () => {
//     clearInterval(timerID);

//     timerID = setInterval(() =>
//     { 
//         if (i === im.length -1)
//         {
//             im[0].src = "Images/marble3.jpg"; //color the next img.
//             im[i].src = "Images/marble1.jpg"; //uncolor the current img.
//             i = -1;
//         }
//         im[i + 1].src = "Images/marble3.jpg"; //color the next img.
//         im[i].src = "Images/marble1.jpg"; //uncolor the current img.
//         i++;
//     }, 1000);
// }

// im[i].onmouseover = () => {
//     clearInterval(timerID);
// };
