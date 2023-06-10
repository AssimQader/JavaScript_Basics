/* 
contextmenue is the menue that appears when u right click the mouse button.
You can prevent the default behaviour of it with the method event.preventDefault();
*/

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
})