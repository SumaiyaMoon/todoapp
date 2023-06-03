//get Elements by Ids.
var list = document.getElementById("list");
// console.log(list)

//Add button Function
function addTodo(){
    var todoInput = document.getElementById("todoInput");
//List Element
var li  =  document.createElement("LI")
var liText  =  document.createTextNode(todoInput.value)
// li.setAttribute("class","d-flex align-items-center justify-start")
console.log(liText)
li.appendChild(liText);

//Delete button in li
var delBtn = document.createElement("BUTTON")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    
    delBtn.appendChild(delText)
delBtn.setAttribute("class", "btn btn-outline-info m-2")


//Edit button in li
var editBtn = document.createElement("BUTTON")
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick", "editItem(this)")
editBtn.setAttribute("class", "btn btn-outline-info m-2")

//append Child Buttons
li.appendChild(delBtn)
li.appendChild(editBtn)

//append li in list(ul)
list.appendChild(li)

//default input empty
todoInput.value = ""




}

function deleteItem(del) {
    del.parentNode.remove()
}



function editItem(ed) {
    var val = prompt("Enter updated value",ed.parentNode.firstChild.nodeValue)
    ed.parentNode.firstChild.nodeValue = val;
  }





//Delete All Btn
function deleteAll() {
    list.innerHTML = ""
}