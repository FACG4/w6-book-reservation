function select(selector){
  return document.querySelector(selector);
}


var form =select(".form");
console.log(form);
var user_name=select(".user");
var email = select("#email");
console.log(email);
var password = select("#password");
var confirmPassword = select("#confirmPassword");
var error =select(".error");
console.log(error);



var checkEmail = function() {
  if (email.validity.typeMismatch) {
    error.textContent = "Please enter a valid email address";
  } else if (email.validity.valueMissing) {
    error.textContent ="Please enter an email address";
  } else {
   error.textContent ="";
  
  }
};

var checkPw = function() {
  if (password.validity.patternMismatch) {
   
   error.textContent = "Password must contain at least eight characters, including one letter and one number";
    
  } else if (password.validity.valueMissing) {
    error.textContent="Please enter a password";
  } else {
    error.textContent="";
  
  }
};

var checkConfirmPw = function() {
  if (password.value != confirmPassword.value) {
    error.textContent ="Passwords do not match";
  } else if (confirmPassword.validity.valueMissing) {
    error.textContent = "Please confirm your password";
  } else {
    error.textContent="";
  
  }
};
email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);
confirmPassword.addEventListener("focusout", checkConfirmPw);
var data = {email:email.value , user:user_name.value , password:password.value};
form.addEventListener("submit", function(event) {
  if (!checkEmail()) {
    event.preventDefault();
  }
  if (!checkPw()) {
    event.preventDefault();
  }
  if (!checkConfirmPw()) {
    event.preventDefault();
  }
  fetch('/form','POST' ,data,()=>{
    console.log("send data");
    
  })
});