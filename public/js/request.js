function fetch(url,method ,value, callback){
  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
    var response = xhr.responseText;
    callback(JSON.parse(response));
  }
}
var data= JSON.stringify({value})
xhr.open(method, url);
xhr.send(data);
}