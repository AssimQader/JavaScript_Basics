/*
ScrollBy(X,Y) : scroll by x,y from its position now, 
so if u clicked scroll button again it will scroll(move) another x,y 
X أفقي، يسكرول يمين لو موجب وشمال لو سالب
Y رأسي، يسكرول لتحت لو موجب ولفوق لو سالب

scrollTo(X,Y) : scroll to a spesific point x,y and don't move(scroll) anymore if u click the button many times.
*/



// scroll 10px down every 100 millyseconds
let timerID;
timerID = setInterval(function scrolling() {
    scrollBy(0, 10); //scrolling only down by 10px, no scrolling right(0px).

    //to check if the scrolling reaches the end of the window: stop intervealing(scrolling) and close the window.
    if ((scrollY + innerHeight) >= document.documentElement.scrollHeight)
    {
        clearInterval(timerID);
        close();
    }
}, 100);



/*---------------------------------------------------------------- */

// document.documentElement.scrollHeight;  = 1559px
//translate: u make a scroll in y index by (for example) 1000px, so there are 559px do not being scrolled().
//they represents the innerHeight, because innerHeight differs if u resize ur page
//innerHeightبيمثل المساحة بتاعت الصفحة اللي باينة قدامك و بتختلف لو كبرت او صغرت الصفحة



