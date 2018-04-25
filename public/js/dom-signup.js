function select(selector) {
  return document.querySelector(selector);
}

function create(element) {
  return document.createElement(element);
}
var signup_btn = select('.signupbtn');
var form_content = select('.modal-content');
var user_name = select('.usr-name');
var email = select('.email');
var psw = select('.psw');
var psw_repeat = select('.psw-repeat');
var error =select(".error");
var emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}/

form_content.addEventListener("submit", function(event) {
  event.preventDefault();
  var info = { email:email.value,user:user_name.value,password:psw.value};
  if (psw.validity.valueMissing || psw_repeat.validity.valueMissing) {
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

  if (psw.value != psw_repeat.value) {
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
      console.log(res);
      if(res === 200){
        window.location.pathname='/back';
      }

      else{
        error.innerText=err
      }


    })
    email.value='';
    psw.value='';
    psw_repeat.value='';
    user_name.value='';
  }
});
