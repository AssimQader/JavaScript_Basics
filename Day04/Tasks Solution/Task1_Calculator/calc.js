let Answer = document.getElementById("Answer"); 
let equalElement = document.querySelector(".equal");
let elements = document.querySelectorAll(".width");
let clear_element = document.querySelector(".clear");
let isEqualPressed = false;


//clear Button//
clear_element.addEventListener("click",function() {
  Answer.value = '0';
});



//Equal Button//
equalElement.addEventListener("click", function() {
  try {
    Answer.value = eval(Answer.value); //eval() method do equations on whatever string pass to it.
    isEqualPressed = true; 
  }
  catch (error)
  {
    Answer.value = "Not a valid equation"; //if eval returns an error.
  }
});



//Other Buttons//
for (let i = 0; i < elements.length; i++) { 
  //add event listner on each button to let the only button is clicked apear in answer box.
  elements[i].addEventListener("click", function () {
    
    if (isEqualPressed) 
    {
      Answer.value = ''; //clear the result of the previous equation that appears on answer box.
      isEqualPressed = false;
    }

    Answer.value += elements[i].value; //5+7-6*1  
  });
}



















// let Ans = document.getElementById("Answer");


// function EnterNumber(num) {
//     Ans.value += num;
// }

// function EnterEqual() {
    
// }

// function EnterOperator(operator) {
//     if (operator === '+' || operator === '-' || operator === '+' ||operator === '/' || operator === '*' )
//         Ans.value += operator;
// }

// function EnterClear() {
//     Ans.value = "";
// }
