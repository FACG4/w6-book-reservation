
function select (selector){
  return document.querySelector(selector);
}
function create(element){
  return document.createElement(element);
}

var search = select(".search_btn");


search.addEventListener("click", function(){

  var input = select(".search_book");
  var name_book = input.value;

fetch('/getData','POST' ,name_book,function(res){
  var startDateInput =create('input');
  startDateInput.setAttribute('type', 'date');
  var endDateInput = create('input');
  endDateInput.setAttribute('type', 'date');
  var reserveButton = create('input');
  reserveButton.setAttribute('type', 'button');
  reserveButton.setAttribute('value', 'reserve');
  var ul = create(ul);
  select('#bookContainer').appendChild(ul)
  var li1 = create('li');
  var li2 = create('li');
  li1.textContent = res.name;
  li2.textContent = 'AUTHOR' +' ' +res.author;
  ul.appendChild(li1);
  ul.appendChild(li2)
  ul.appendChild(startDateInput);
  ul.appendChild(endDateInput);
  ul.appendChild(reserveButton);

  reserveButton.addEventListener('click', function(){
    var data = {bookId: res.id, startDate: startDateInput.value, endDate: endDateInput.value, userId: 1}
    fetch('/postData', 'POST', data, function(res){
      alert('your book has been successfully reserved from ' + data.startDate + ' to ' + data.endDate);
    })
  })
})




});
