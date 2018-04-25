function fetchApi(url,method ,value, callback){
  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    callback(null,xhr);
  }
  else{
    callback('User exists')
  }
}
var data= JSON.stringify(value)
xhr.open(method, url);
xhr.send(data);
}

function fetch(url,method ,value, callback){
  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    var response=xhr.response;
    callback(response);
  }
  else{
    callback('User exists')
  }
}
var data= JSON.stringify(value)
xhr.open(method, url);
xhr.send(data);
}
