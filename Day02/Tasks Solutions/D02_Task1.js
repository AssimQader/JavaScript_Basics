let str1 = prompt("Enter the string");

let character;
do {
  character = prompt(
    "Enter the character u want to count in the previous string"
  );
} while (!str1.includes(character)); //if the user input a character that not within the string.

/*-------------------------------------------- */

let userchoise = confirm(
  "Do u want to take letter case sensetivity in consideration?"
); //confirm() method returns true or false


//  /character/g   //-- > g(general) //if the user want case sensetivity. (return all e small)
//  /character/gi  //-- > gi(genneral and case insisitevity) //if the user don't want case sensetivity. (return all e&E).

//RegExp() takes: (string or char) , flag .. and return the complete patter: /character/g or /character/gi
var reg = RegExp(character, userchoise === true ? "g" : "gi");

//match() takes the pattern u created(reg) and apply it to the string the user will input(str1),
//then return the characters as array.
//.length: to know the length of the array, so u know how character is printed  #
let Finalresult = str1.match(reg).length;

console.log(Finalresult);


