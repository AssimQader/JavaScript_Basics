//Store the query string in object with key and values//
//?User+Name=asem&password=1234&Email=asem.adel00%40gmail.com&Mobil=01061103073&Job+Title=Software+Engineer&Address=nasr+city&Gender=Male



//1. get the queryString  2. delete ? at the first  3. replace %40 in Email with @
let queryString = location.search.substring(1).replace(/(%40)/g, "@"); 

let arr = queryString.split('&'); 
/* arr = 
0: "User+Name=asem"
1: "password=1234"
2: "Email=asem.adel00%40gmail.com"
3: "Mobil=01061103073"
4: "Job+Title=Software+Engineer"
5: "Address=nasr+city"
6: "Gender=Male"
*/


let obj = {};

for (let i = 0; i < arr.length; i++)
{
    arr[i].split('=');
    obj[arr[i].split('=')[0].replace(/[+]/g, ' ')] = arr[i].split('=')[1].replace(/[+]/g, ' ');
}

/* 
- So now the first obj key stores: arr[i].split('=')[0] , which is the first part of "User+Name=asem"
before = sign(User+Name). And its value is the second half after = sign(asem). 
And so on for all the rest 6 keys and values. 
- the replace(/[+]/g, ' ') regular expression is to delete all + signs in the keys and values.
*/


/*----------------------------------------------- */

//Show Greeting Message//
for (item in obj)
{
    if (item === "User Name")
        document.getElementById("welc").innerHTML = `Welcom ${obj[item]} in our website..  :)`;
    else
        document.querySelector(".data").innerHTML += `${item} : ${obj[item]}<br><br>`;
}
/* 

- If u make: ( .innerHTML = `${item} is ${obj[item]}` is ${obj[item]} ) like that with equal only(=):
the div will store just the last statment excuted between ` ` , so what will display in
greeting window is just: Gender is Male. 

- To solve this use acumlate operator(+=) to store statemnt after statment in the div.  
زي كأنك بتجمع كل الجمل وتدخلها في الانراتشتيمل وبدورها بتدخلها في ال ديف

*/

/*----------------------------------------------- */

//Get Browser Name//
function getBroswerName()
{
    let browserInfo = navigator.userAgent; //to get a string of browser information
    let browserName;
    
    if (browserInfo.includes("Opera") || browserInfo.includes("Opr")) {
        browserName = "Opera";
    }
    else if (browserInfo.includes("Edg")) {
        browserName = "Edg";
    }
    else if (browserInfo.includes("Chrome")) {
        browserName = "Chrome";
    }
    else if (browserInfo.includes("Safari")) {
        browserName = "Safari";
    }
    else if (browserInfo.includes("Firefox")) {
        browserName = "Firefox";
    }
    else {
        browserName = "Unknown"
    }

    return browserName;
}
document.querySelector(".data").innerHTML += `You are using ${getBroswerName()} browser`;