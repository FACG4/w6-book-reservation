
function select (selector){
  return document.querySelector(selector);
}
function create(element){
  return document.createElement(element);
}

var search = select(".search_btn");

search.addEventListener("click", function(){
  var input = select(".search_book");
  console.log(input);
  
    var name_book = input.value;
    console.log(name_book);

fetch('/getData','POST' ,name_book,function(res){

  
  var startDateInput =create('input');
  startDateInput.setAttribute('type', 'date');
  var endDateInput = create('input');
  endDateInput.setAttribute('type', 'date');
  var reserveButton = create('input');
  reserveButton.setAttribute('type', 'button');
  var ul = create(ul);
  select('#bookContainer').appendChild(ul)
  var li = create('li');
  li.textContent = res.name;
  ul.appendChild(li);
  ul.appendChild(startDateInput);
  ul.appendChild(endDateInput);
  ul.appendChild(reserveButton);  

})




});
