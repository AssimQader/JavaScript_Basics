
let arr = [];
alert("Enter 5 numbers: ");


//take the inputs from user, and check if he/she inputs characters//
let i = 0;
while ( i < 5) {
  arr[i] = parseInt(prompt(`Number ${i + 1}: `));

  if ( !isNaN(arr[i]) ) {
    i++;
  }
}


document.write(`<h1>Sorting</h1> <hr>`);
document.write(`<span style = "color: red; font-weight: bold;">U've entered the values of</span>  ${arr}<br><br>`);


//explain compare function//
{
/*compare function: is used to sort an array of numbers numerically, not alphapitaclly.
    syntax:  function(a, b){return a - b} for Ascending order.
             function(a, b){return b - a} for Descending order.
             
1- if the return is:  Negative Value (a < b) =>  so "a" will be placed before "b"
2- if the return is:  Zero value (a == b) => No Change
3- if the return is:  Positive Value (a > b ) => so "a" will be placed after "b"
*/
}
let Asec_arr = arr.sort(function (a, b) { return a - b; });
document.write(`<span style = "color: red; font-weight: bold;">ur values after being sorted Ascending </span>  ${Asec_arr}<br><br>`);

let Desc_arr = arr.sort(function (a, b) { return b - a; });
document.write(`<span style = "color: red; font-weight: bold;">ur values after being sorted Descending </span>  ${Desc_arr}<br><br>`);