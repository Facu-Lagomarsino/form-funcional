    //RUN NODE.JS
let msg = 'Hello Word';
console.log(msg);

    //FORM
const email = document.getElementById('email');
const pass = document.getElementById('password');
const names = document.getElementById('name');
const lastNames = document.getElementById('lastName');
const form = document.getElementById('form');
const warning = document.getElementById('warnings');

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    let warnings = '';
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    let signUp = false;
    warning.innerHTML = '';

    if (!regexEmail.test(email.value)) {
        email.style.borderColor = "brown";
        warnings += `*Mandatory Email, example: mail@mail.com* `;
        signUp = true;
     
    }
    if (pass.value.length < 8) {
        pass.style.borderColor = "brown";
        warnings += `*Password nor valid, minimum 8 characters* `;
        signUp = true;
    } 
    if (names.value.length < 2) {
        names.style.borderColor = "brown";
        warnings += `*Name nor valid* `;
        signUp = true;
    }
    if (lastNames.value.length < 2) {
        lastNames.style.borderColor = "brown";
        warnings += `*Last name nor valid* `;
        signUp = true;
    }
    if (signUp) {
        warning.innerHTML = warnings;
    }
    else if (email.value && pass.value && names.value && lastNames.value) {
        email.style.borderColor = "green";
        pass.style.borderColor = "green";
        names.style.borderColor = "green";
        lastNames.style.borderColor = "green";
        warning.innerHTML = "Londing...";
        warning.style.color = "white";
        success();  
    }
});

    //SELECTED ACCOUNT
function selectedAccount() {
    let accountType = document.getElementById('accountType');
    let account = accountType.value;

    document.getElementById('accountTypeSelect').innerText =`Will be searched in the database of ${account}.`;    
}

const typeAccount = {
    "Patient":["Patient"],
    "Caregiver":["Caregiver"],
    "Both":["Both"]
};

function chargeAccount() {
    let typeAccounts = Object.keys(typeAccount);
    let accountsType = document.getElementById('accountType');
    for (type in typeAccounts) {
        let option = document.createElement("option");
        option.value = types[type];
        option.text = types[type];
        accountsType.appendChild(option);
    }
}

    //SUBMIT
function success() {

    setTimeout(() => {
        warning.innerHTML = 'SUBMITTED FORM';
        warning.style.color = "green";
        warning.style.fontSize = "2rem";
        form.style.borderColor = "green";  
        alert('SUCCESSFUL REGISTRATION!', form.reset()); 
    }, 3000);  
} 




