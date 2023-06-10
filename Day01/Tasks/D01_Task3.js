do {
  var num1 = parseInt(prompt("Enter the first number"));
  var num2 = parseInt(prompt("Enter the second number"));
} while (num1 === num2 || isNaN(num1) || isNaN(num2));

var arr = [];
for (let i = num1, j = 0; i <= num2; j++, i++) {
  arr[j] = i;
}

console.log(arr);

let choosen;
do {
  choosen = parseInt(
    prompt("Which type of numbers you want to show:\n 1-Even\n 2-Odd")
  );
} while (choosen > 2 || choosen < 1 || isNaN(choosen));

if (choosen === 1) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
} else if (choosen === 2) {
  for (let j = 0; j < arr.length; ++j) {
    if (arr[j] % 2 !== 0) {
      console.log(arr[j]);
    }
  }
}
