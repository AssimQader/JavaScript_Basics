
let username = document.getElementById("un");
let age = document.getElementById("age");
let gender_male = document.getElementById("m");
let gender_female = document.getElementById("f");
let favcolor = document.getElementById("fc");




let result = confirm("Do you want to be remembered each time you visit the site?"); 



//create the cookies table with expiration date//
if (result === true)
{
    document.getElementById("reg").onclick = () => {

        setCookie('username' , username , 1);

        setCookie("Age", age.value, 1);

        if (gender_male.checked === true)
            setCookie("Gender", gender_male.value, 1);
        if (gender_female.checked === true)
            setCookie("Gender", gender_female.value, 1);
        
        setCookie("Favorite Color", favcolor.value, 1);
        setCookie("NumOfVisits", 1);
        
        //moving to the welcome_page.html//
        location.assign("welcome_page.html");
    }
}
else {
    document.getElementById("reg").onclick = () => {
        setCookie("User Name", username.value);

        setCookie("Age", age.value);

        if (gender_male.checked === true)
            setCookie("Gender", gender_male.value);
        if (gender_female.checked === true)
            setCookie("Gender", gender_female.value);
        
        setCookie("Favorite Color", favcolor.value);

        //moving to the welcome page//
        location.assign("welcome_page.html");
    }
}












