
function select (selector){
  return document.querySelector(selector);
}
function create(element){
  return document.createElement(element);
}

var search = select("#searchBtn");


search.addEventListener("click", function(){

  var input = select("#searchBook");
  var name_book = input.value;
  if (!name_book){
    alert('please enter a book name')
  } else {
    fetch('/getData','POST' ,name_book,function(res){
      var startDateInput =create('input');
      startDateInput.setAttribute('type', 'date');
      startDateInput.setAttribute('id', 'startDate');
      var endDateInput = create('input');
      endDateInput.setAttribute('type', 'date');
      endDateInput.setAttribute('id', 'endDate');
      var startLabel = create ('label');
      startLabel.setAttribute('for', 'startDate')
      startLabel.textContent = 'start date';
      var endLabel = create ('label');
      endLabel.setAttribute('for', 'endDate');
      endLabel.textContent = 'end date';
      var reserveButton = create('input');
      reserveButton.setAttribute('type', 'button');
      reserveButton.setAttribute('value', 'reserve');
      var ul = create(ul);
      var li1 = create('li');
      var li2 = create('li');
      li1.textContent = res.name;
      li2.textContent = 'AUTHOR' +' ' +res.author;
      li1.className = 'book';
      li2.className = 'author';
      ul.appendChild(li1);
      ul.appendChild(li2)
      ul.appendChild(startLabel);
      ul.appendChild(startDateInput);
      ul.appendChild(endLabel);
      ul.appendChild(endDateInput);
      ul.appendChild(reserveButton);
      var oldUl = select('#bookContainer').firstElementChild;
      select('#bookContainer').replaceChild(ul, oldUl)
      
      reserveButton.addEventListener('click', function(){
        var data = {bookId: res.id, startDate: startDateInput.value, endDate: endDateInput.value, userId: 1}
        fetch('/postData', 'POST', data, function(res){
          alert('your book has been successfully reserved from ' + data.startDate + ' to ' + data.endDate);
        })
      })
    })
  }
});
