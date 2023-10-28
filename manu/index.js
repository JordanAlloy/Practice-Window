// ACCORDIAN
// const accordian = document.getElementsByClassName ('content-container');


// for(i=0; i< accordian.length; i++){
//     accordian[i].addEventListener('click', function(i){
//         this.classList.toggle('active');
//     })
// }
// END OF ACCORDIAN





// TODO LIST 1

// END OF TODO LIST 1





// BRAD TRAVASEY MEDIA ADDING, REMOVING AND FILTERING DOM INPUTS
// selectors
  const form = document.getElementById('addForm');
  const itemList = document.getElementById('items');
  const filter = document.getElementById('filter')
  const inputForm = document.getElementsByClassName('btn-dark')
  const formControl =  document.getElementsByClassName('form-control')

//   eventlisteners
form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)
formControl.addEventListener('keydown', clearForm)


//   functions Adding to thr ul from input
function addItem(e){
  // prevents forms submitting
  e.preventDefault();

  // get input item
  const newItem = document.getElementById('item').value;

  // create new li
  const li = document.createElement('li');

  // add className
  li.className = 'list-group-item';

  // append li to list
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li)

  // Create a delete button element
  var deleteBtn = document.createElement('button');

  // create a delete btn with css styling
  deleteBtn.setAttribute('class', 'btn-btn')
  deleteBtn.append(document.createTextNode('delete'))

  // create a delete btn with bootsrap
  // deleteBtn.className ='btn-btn delete-btn del'
  // deleteBtn.appendChild(document.createTextNode('delete'))

  // append btn to li
  li.appendChild(deleteBtn);

}

// Deleting or removing items
function removeItem(e){
  // remove item
  if(e.target.classList.contains('btn-btn')){
    if(confirm('sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li)

    }
  }

}

function filterItems(e){
  // convert to lowercase

  var text = e.target.value.toLowerCase()

  // get Li's
  var items = itemList.getElementsByTagName('li')

  // convert to arrays
  Array.from(items).forEach((item)=>{
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
      item.style.display ='block';
    }else{
      item.style.display='none'
    }
  })

}

function clearForm(e){

}
// END OF BRAD TRAVASEY MEDIA ADDING, REMOVING AND FILTERING DOM INPUTS