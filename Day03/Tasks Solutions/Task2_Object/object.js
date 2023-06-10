
function dispVal(obj, str)
{
    for (item in obj) {   //item is iterates on the keys names and store it, so item is an string.
        if (item === str)
            return alert(obj[item]);
    }
    alert(`${str}: is not a property in yor object!`);
}



let obj = { namee: "Asem", age: 24 };
dispVal(obj, "add");
