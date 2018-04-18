
function select (selector){
  return document.querySelector(selector);
}
var search = select(".search_btn");
var input = select(".search_book");


// console.log(search);
search.addEventListener("click", function(){
var name_book = input.value;

fetch('/getData','POST' ,name_book,function(res){
 console.log(res);

})




});
