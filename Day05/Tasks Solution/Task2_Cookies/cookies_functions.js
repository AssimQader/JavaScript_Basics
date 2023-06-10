
//Helper Function//
function Cookie_table()
{
    let CookeiStr = document.cookie; //stores the cookie string: 'User Name=Asem Adel Qader; Gender=Male; Favorite Color=Blue; Age=24'
    let seperatedCookie = CookeiStr.split(';');
    /*
    Note that there still spacese before " Age=24" and the same for the next two elements.
        0: "User Name=asem adel"
        1: " Age=24"
        2: " Gender=Male"
        3: " Favorite Color=Green"

        so when u store it as key in object, use trimstart() method to delete this begging spaces.
    */
    
    //store the cookiesNames and cookiesValues in object.
    let Cookie_Object = {};
    for (let i = 0; i < seperatedCookie.length; i++)
    {
    seperatedCookie[i].split('='); //results an array of two indexes 0, 1: cookieName and cookieValue.
        Cookie_Object[seperatedCookie[i].split('=')[0].trimStart()] = seperatedCookie[i].split('=')[1]; // obj[key] = value. 
    //key is the cookieName and value is the cookieValue.
    }

    return Cookie_Object;
}

function setCookie(cookieName, cookieValue, expire = 0) {
    if (expire === 1)
    {
        let date = new Date();
        date.setMonth(date.getMonth() + 1); //the date variable stores the value of a next month from now, it's same of: (date = 7-6-2023)
        document.cookie = `${cookieName}=${cookieValue};expires=${date}`;
    }
    else
        document.cookie = `${cookieName}=${cookieValue}`;
    
    
}


//return the value of the cookie(Asem, Male,...) not its names(User Name, Gender, Age, ...)
function getCookie(cookieName) {
    let obj = Cookie_table();
    return obj[cookieName];
}


function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=`;
}


function allCookiesList() {
     return Cookie_table();
}


function isCookieExsist(cookieName) {
    let table = Cookie_table();
    
    for (item in table)
        if (item === cookieName)
            return true;
    
    return false;
}














// function VisitCounter() {

//     var visits = GetCookie("counter");

//     if (!visits) {
//         visits = 1;

//         document.write("By the way, this is your first time here.");

//     }

//     else {

//         visits = parseInt(visits) + 1;

//         document.write("I note, you have been here " + visits + " times.");
//     }

//     setCookie("counter", visits, expdate);
// }