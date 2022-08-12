const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordGenEl1 = document.getElementById("passwordGen-el1")
let passwordGenEl2 = document.getElementById("passwordGen-el2")




function generatePassword() {
    let num = document.getElementById("password-length").value;   
    if (num >= 20) {
        num = 20
    } else if (num <= 5) {
        num = 5
    }
    let passwordOne = "";
    let passwordTwo = "";
    for (let i = 0; i < num; i++){
    let password1 = Math.floor(Math.random() * characters.length)
    let password2 = Math.floor(Math.random() * characters.length)
     passwordGenEl1.textContent = passwordOne + characters[password1]
     passwordGenEl2.textContent = passwordTwo + characters[password2]
    passwordOne += characters[password1]
    passwordTwo += characters[password2]
       }
};

function copyText1() {
    let passwordBox = document.getElementById("passwordGen-el1").innerHTML;
    const el = document.createElement("textarea");
    el.value = passwordBox;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied the text: " + el.value);
}

function copyText2() {
    let passwordBox = document.getElementById("passwordGen-el2").innerHTML;
    const el = document.createElement("textarea");
    el.value = passwordBox;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied the text: " + el.value);
}



