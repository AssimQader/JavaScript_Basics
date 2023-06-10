
//TO UNDERSTAND THE VALIDATIONS ON EACH METHOD, TAKE A LOOK TO cookies_functions.js FILE FIRST//



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


function setCookie(...args) {

    if (args.length > 3 || args.length < 2)
        throw new RangeError(`This method takes three parameters, two as minimum...`);
    
    if (typeof args[0] !== 'string')
        throw new TypeError(`${args[0]} is not a string value, cookieName have to be string only...`);
    
    if (isNaN(args[2]))
        throw new TypeError(`${args[2]} is not a number, pass only 1 or 0 values...`);
    
    
    if (args[2] === 1)
    {
        let date = new Date();
        date.setMonth(date.getMonth() + 1); //the date variable stores the value of a next month from now, it's same of: (date = 7-6-2023)
        document.cookie = `${args[0]}=${args[1]};expires=${date}`;
    }
    else if(args[2] === 0)
        document.cookie = `${args[0]}=${args[1]}`;
}


function getCookie(...args) {

    if (typeof args[0] !== 'string')
        throw new TypeError(`${args[0]} is not a string! Cookies Names are formated in a string format only...`);
    
    if (args.length > 1)
        throw new RangeError(`getCookie() takes only one parameter...`);
    
    if (args.length == 0)
        throw new RangeError(`getCookie() is not a parameterless method...`);
    
    
     let obj = Cookie_table();  //store cookies table in object.
    for (item in obj)
    {
        if (item === args[0]) //if the cookie exist: return it.
            return obj[args[0]];
    }

    //if the cookie doesn't exist: throw reference error.
    throw new ReferenceError(`${args[0]} is not exist in the cookie table...`);
}



function deleteCookie(...args) {

    if (args.length == 0)
        throw new RangeError(`deleteCookie() is not a parameterless method...`);
    
        if (args.length > 1)
        throw new RangeError(`deleteCookie() takes only one parameter...`);
    
    if (typeof args[0] !== 'string')
        throw new TypeError(`${args[0]} is not a string! Cookies Names are formated in a string format only...`);
    
    
    let cookieT = Cookie_table();  //store cookies table in object.
    for (item in cookieT)
    {
        if (item === args[0]) //if the cookie exist: delete it.
            return document.cookie = `${args[0]}=`;
    }
    //if the cookie doesn't exist: throw reference error.
    throw new ReferenceError(`${args[0]} is not exist in the cookie table to delete it...`);
}


function allCookiesList() {
    return Cookie_table();
}


function isCookieExsist(...args) {

    if (args.length > 1)
        throw new RangeError(`isCookieExsist() takes only one parameter...`);
    
    if (args.length == 0)
        throw new RangeError(`isCookieExsist() is not a parameterless method...`);

    
    let table = Cookie_table();
        for (item in table)
        if (item === args[0])
            return true;
    
    return false;
}