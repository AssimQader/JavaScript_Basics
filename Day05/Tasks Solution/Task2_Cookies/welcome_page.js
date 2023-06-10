
/*If there is already cookieName called numOfVisites there, 
then the visitor has visited the site before. So increase this number in the next visit.*/
if (isCookieExsist("numOfVisites")) 
    setCookie("numOfVisites", parseInt(getCookie("numOfVisites")) + 1); 
else
    setCookie("numOfVisites", 1);



let image = document.images[0];

if (getCookie("Gender") === "male") // "male" as string not male as value, because getCookie() returns the cookie value form an object, and the values in object are stored in strings "" :)
    image.src = "Images/male.jpg";
else
    image.src = "Images/female.jpg";


let message = document.getElementById("p");
message.innerHTML = `Welcome <span style="font-weight: bold; color: ${getCookie("Favorite Color")};">${getCookie("User Name")}</span>, You have visited my site <span style="font-weight: bold; color: ${getCookie("Favorite Color")};">${getCookie("numOfVisites")}</span> times`;