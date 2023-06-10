
let radius;
do {
    radius = parseInt(prompt("What is the value of your circle radius"));
} while (isNaN(radius));
alert(`Total area of the circle is: ${Math.PI * radius * radius}`);


let sqr;
do {
    sqr = parseInt(prompt("What is the value you want to calculate its square root"));
} while (isNaN(sqr));
alert(`square root of ${sqr}  is ${Math.sqrt(sqr).toFixed(2)}`);



let angle;
do {
    angle = parseInt(prompt("What is the angle you want to calculate its cos value"));
} while (isNaN(angle));
alert(`cos ${angle}  is ${Math.cos((angle * Math.PI) / 180).toFixed(4)}`);