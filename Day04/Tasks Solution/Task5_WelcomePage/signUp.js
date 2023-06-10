
//User Name Validation//
let namee = document.getElementById("un"); 
namee.onblur = () => {
    let result = /^[a-zA-Z " "]{2,20}$/.test(this.value);

    if (namee.value === "" || result === false)
        namee.focus();
}


//Password Validation//
let pass = document.getElementById("pss");
pass.onblur = () => {
        let valueLenght = pass.value; //store the value of password in variable as string
    if (valueLenght.length < 4) { //validate that the length of the password is >= than 4.
        pass.focus();
    }    
}


//Email Validation//
let mail = document.getElementById("em");
mail.onblur = () => {
     let result = /^[^!@#$%^&*{}|"';.<>_][a-zA-Z0-9!@#$%^&*{}|"';.<>_]+@{1}(gmail){1}\.(com){1}$/.test(mail.value);
    if (mail.value === "" || result === false)
        mail.focus();
}


//Mobile Validation//
let mob = document.querySelector("#mob");
mob.onblur = () => {
    let result = /^(011|012|015|010)[0-9]{8}$/.test(mob.value);

    if (mob.value === "" || result === false)
        mob.focus();
}


//Job Title Validation//
let job = document.getElementById("job");
job.onblur = () => {
    if (mob.value === "") {
        job.focus();
    }
}


//Address Validation//
let add = document.querySelector("#add");
add.onblur = function () {
    if (add.value === "") {
        add.focus();
    }
}

