/*The Event() object represents the state of an event, such as
the elementin which the event occurred(event.target), the state of the keyboard keys(keydown.code, .keyCode),
the location of the mouse(event.offsetX,Y), and the state of the mouse buttons(clicked or not).
*/

//event keyword is deprecated. but u can relive it by passing it as a parameter to the arrow function.
//keydown is an event taht have properites like code, keyCode.


document.addEventListener('keydown', () => {
    alert(`ASCII Code of ${event.code} is: ${event.keyCode}`);
    
});



/*
You can declare the function u pass to addEventListener() method outside it, then pass its name to the method, 
like below:

    function handler() 
    {
        alert(`ASCII Code of ${event.code} is: ${event.keyCode}`);
    }

    document.addEventListener('keydown', handler);  //note: pass the method without parenthese().


By this, u can delete the event using removeEventListener(handler) method and pass the name of the event to it.
*/

