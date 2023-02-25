const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

var email = document.forms['form']['email']
var password = document.forms['form']['password'];

email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',password_verify);



sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validate(){
  if(email.value.length < 9){
    email.style.border = "1px solid red";
    email.focus();
    return false;
  }  
  
  if(password.value.length < 6){
    email.style.border = "1px solid red" ;
    email.focus();
    return false;
  }
}

function email_verify(){
  if(email.value.length >= 8){
    email.style.border = "1px solid yellow";
   
    return true;
  }
  
}
function password_verify(){
  if(password.value.length >= 5){
    password.style.border = "1px solid yellow";
   
    return true;
  }
  
}
