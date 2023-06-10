//Inforce user to put a string, empty string "" is denied.
let sentence;
do {
  sentence = prompt("Enter the String:");
} while (sentence === "");


let userChoose = confirm(
  "Do you want to take letters case sensitivity in considertation?"
);




//chek if Palindrome or not//
function Ispalindrome(str) {
  let size = str.length;

  for (let i = 0; i < size / 2; i++)
  {
    if (str[i] !== str[size - i - 1])
      return console.log("Not a Palindrome");
  }
   console.log("Is a Palindrome");
}



if (userChoose == true) {
  Ispalindrome(sentence);
} else {
  //if the user don't want to consider letters case sensitve, then convert the whole sentence to lowercase.
  let newString = sentence.toLowerCase(); //toLowerCase() method return a new string, so u have to store it in string variable.
  Ispalindrome(newString);
}

/*-----------------------------------------------------------*/

{
  //   /*string is imutable datatypeغير قابل للتغيير, so if u declare tempString withot new word --> let tempString = "",
  // the line ( tempString[j] = sentence[i]; ) will not affect in tempString, and its value still = undefined. */
  //   // let tempString = new String("");
  //   // for (
  //   //   let i = sentence.length - 1, j = 0;
  //   //   i >= 0 && j < sentence.length;
  //   //   i--, j++
  //   // ) {
  //   //   tempString[j] = sentence[i];
  //   // }
}
