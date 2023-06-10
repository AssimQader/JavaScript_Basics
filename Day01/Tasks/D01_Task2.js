var sum = 0;
do {
  var input = parseInt(prompt("Enter Your number"));
  if (isNaN(input)) alert("Enter Numbers Only");
  else sum = sum + input;
} while (sum <= 100 && input !== 0);

// alert("The sum of your numbers is: " + sum);
console.log(sum);
