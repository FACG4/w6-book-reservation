
function select (selector){
  return document.querySelector(selector);
}


var search = select(".search_btn");
var input = select(".search_book");


search.addEventListener("click", function(){
var name_book = input.value;

fetch('/getData','POST' ,name_book,function(res){
  var startDateInput = document.createElement('input');
  startDateInput.setAttribute('type', 'date');
  var endDateInput = document.createElement('input');
  endDateInput.setAttribute('type', 'date');
  var reserveButton = document.createElement('input');
  reserveButton.setAttribute('type', 'button');
  var li = document.createElement('li');
  li.textContent = res.name;
  var oldLi = select('#book');
  var ul = document.createElement('ul');
  ul.appendChild(li);
  ul.appendChild(startDateInput);
  ul.appendChild(endDateInput);
  ul.appendChild(reserveButton);
  select('#bookContainer').replaceChild(ul, oldLi)

})




});
