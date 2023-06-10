
// {
// /^(011|012|015|010)[0-9]{8}$/.test("01061103073");  //for mobile numbers

// /* Translate:
// (011 | 012 | 015 | 010)  ==> the number should statr with any of these numbers.
// [0-9]  ==> should be numbers only, chars are not permited.
// {8}  ==> the total numbers after(011|012|015|010) have to be 8 digits only.
// ^ ==> start sign: means that the number have to start with 011 or 012, .. so if zero is duplicated(00011) it return false.
//       it must start with those three nums sequesncelly.

// $  ==> End sign: means that the number should ends with 8 digits, no more numbers after it.
//        010611030739 return false beacause the length of it increase 1.
//        if u don't but $ at the end, then 010611030739 return true,
//        because the regular expression searched for this pattern ^(011|012|015|010)[0-9]{8} and find it,
//        so it returns true no matter what comes next.

// */


// /^[a-zA-Z]{2,10}$/.test("AsemAdelzz"); //for names
// /* Translate:
// [a-z | A-Z]  ==> should be characters only from a to z or A to Z.
// {2,10}  ==> the string should consist of minimum two charcters and maximum 10 characters.
// $  ==> means that the string should ends with 10 chars, if u don't but $ at the end,
//        then by adding another char to "AsemAdelzz" it return true, because the regular expression searched
//        and find the pattern in the string "AsemAdelzz" so it returns true no matter waht comes next.





let namee, nameResult;
do {
    namee = prompt("Enter your name");
    nameResult = /^[a-zA-Z]{2,10}$/.test(namee);
}
while (nameResult === false);
    



let homePhone, homeResult;
do {
    homePhone = prompt("Enter your Home Phone");
    homeResult = /^[0-9]{8}$/.test(homePhone);
    
}
while (homeResult === false);



let mobile, mobileResult;
do {
    mobile = prompt("Enter your Mobile Number");
    mobileResult = /^(011|012|015|010)[0-9]{8}$/.test(mobile);
}
while (mobileResult === false);




let mail, mailResult;
do {
    mail = prompt("Enter a valid email");
    mailResult = /^[^!@#$%^&*{}|"';.<>_][a-zA-Z0-9!@#$%^&*{}|"';.<>_]+@{1}(gmail){1}\.(com){1}$/.test(mail);
}
while (mailResult === false);




let color;
do {
    color = prompt("Which color u want to show ur datata with:\n1- Blue\n2- Red\n3- Green");
}
while (color !== "Red" && color !== "Green" && color !== "Blue");




document.write(`<h1>USER INFO</h1> <hr>`);
document.write(`<div style = "color: ${color}">Welcome dear guest: ${namee}<br></div>`);
document.write(`<div style = "color: ${color}">Your Telephone Number is: ${homePhone}<br></div>`);
document.write(`<div style = "color: ${color}">Your Mobile Number is: ${mobile}<br></div>`);
document.write(`<div style = "color: ${color}">Your Email Address is: ${mail}<br></div>`);

let date = new Date();
document.write(`<div style = "color: ${color}"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>Today is: ${date.toDateString()}</div>`); //toDateString() show the date as string, without time or المنطقة الزمنية
