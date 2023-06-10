function GetLargestWord(str = "") {
  let arr = str.split(" "); //split() method returns array of substrings

  let max = 0,
    index = 0,
    size = arr.length;

  for (let i = 0; i < size; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      index = i;
    }
  }

  return arr[index];
}

let input;
do {
  input = prompt("Enter the string: ");
} while (input === "");

console.log(GetLargestWord(input));
