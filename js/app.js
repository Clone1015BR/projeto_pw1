
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
    debugger;
   body.className = "sign-in-js"; 
   console.log("Alterando Signin!");
});

btnSignup.addEventListener("click", function () {
    debugger
    body.className = "sign-up-js";
    console.log("Alterando Sigup!");
})


