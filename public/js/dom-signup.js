function select(selector) {
  return document.querySelector(selector);
}

function create(element) {
  return document.createElement(element);
}
function fetch1(url,method ,value, callback){
  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    var response = xhr.responseText;
  callback(JSON.parse({response}));
  }
}
var data= JSON.stringify(value)
xhr.open(method, url);
xhr.send(data);
}
var signup_btn = select('.signupbtn');
var form_content = select('.modal-content');
var user_name = select('.usr-name');
var email = select('.email');
var psw = select('.psw');
var psw_repeat = select('.psw-repeat');
var emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}/

signup_btn.addEventListener("click", function() {
  var data = {email: email.value, user_name: user_name.value, password: psw.value}
  if (user_name.value.length === 0 || email.value.length === 0 || psw.value.length === 0 || psw_repeat.value.length === 0
  || !email.value.match(emailRegex)) {
    alert('Fill the required fields properly!!!');
  }
  else{
    fetch1('/sign-up', 'POST', JSON.stringify(data), function(res){
      alert('user is successfully signed up with the email' + data.email + ' and user name ' + data.user_name);

    })
  }
})
//
// window.addEventListener("load", function () {
//   console.log('HELOOOO');
//   function sendData() {
//     var XHR = new XMLHttpRequest();
//
//     // Bind the FormData object and the form element
//     var formData = new FormData(form_content);
//     console.log(FormData));
//
//     // Define what happens on successful data submission
//     XHR.addEventListener("load", function(event) {
//       console.log(event.target.responseText);
//        alert("The server says: " + event.target.response);
//     });
//
//     // Define what happens in case of error
//     XHR.addEventListener("error", function(event) {
//       alert('Oops! Something went wrong.');
//     });
//
//     XHR.open("POST", "/sign-up");
//     XHR.send(formData);
//   }
//
//   // Access the form element...
//
//   // ...and take over its submit event.
//   form_content.addEventListener("submit", function (event) {
//     console.log('HELOOOO FROM FORM EVENT LISTENER');
//     event.preventDefault();
//     sendData();
//   });
// })
