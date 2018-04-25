function select(selector){
  return document.querySelector(selector);
}


var form =select(".form");
var user_name=select(".user");
var email = select("#email");
var password = select("#password");
var confirmPassword = select("#confirmPassword");
var error =select(".error");



form.addEventListener("submit", function(event) {
  event.preventDefault();
  var info = {user:user_name.value,email:email.value,password:password.value};
  if (password.validity.valueMissing || confirmPassword.validity.valueMissing) {
    error.innerText = "Please enter a password";
    event.preventDefault();
  }

  // if (
  //   password.validity.patternMismatch ||
  //   confirmPassword.validity.patternMismatch
  // ) {
  //   error.innerText =
  //     "including one letter and one number";
  //   event.preventDefault();
  // }

  if (password.value != confirmPassword.value) {
    error.innerText = "Passwords do not match";
    event.preventDefault();
  }

  if (email.validity.typeMismatch) {
    error.innerText = "Please enter a valid email address";
    event.preventDefault();
  }

  if (email.validity.valueMissing) {
    error.innerText = "Please enter an email address";
    event.preventDefault();
  
  }else{
    fetchApi('/form','POST',info,(err,res)=>{
  
      if(res === 200){
        window.location.pathname='/back';

      }

      else{
        error.innerText=err
      }
      
      
    })
    email.value='';
    password.value='';
    confirmPassword.value='';
    user_name.value='';
  }
});
