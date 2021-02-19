var todolist = document.querySelector("myToDoList");
var todoitems = [];

var finalDate;

function addItem(){
    date()
    var workName = document.getElementById("myInput").value;
    var todo = {
        work: workName,
        createdAt: finalDate,
    }
    todoitems.push(todo)
    for (i = 0; i < todoitems.length; i++){
        var a = todoitems[i].work
        var b = todoitems[i].createdAt
    }
    
    document.getElementById("myInput").value = " "
    var liInput = document.createElement("input")
    liInput.className = "lInput"
    liInput.value = a;
    var att = document.createAttribute("readonly")
    liInput.setAttributeNode(att);
    var liItem = document.createElement("li")
    liItem.className = "output"
    liItem.appendChild(liInput);
    document.getElementById("myToDoList").appendChild(liItem);
    var edit = document.createElement("button")
    edit.className = "editButton"
    var editText = document.createTextNode("Edit")
    edit.onclick = function editValue() {
        liInput.removeAttributeNode(att)
        edit.innerHTML = "OK"
        edit.onclick = function alright() {
            liInput.setAttributeNode(att);
            edit.innerHTML = "Edit"
        }
    }
    edit.appendChild(editText);
    liItem.appendChild(edit);
    var dlt = document.createElement("button");
    dlt.className = "deleteButton"
    var deleteText = document.createTextNode("Delete")
    dlt.onclick = function deleteValue() {
        liItem.style.display = "none"
    }
    dlt.appendChild(deleteText)
    liItem.appendChild(dlt)

    
    var done = document.createElement("button")
    done.onclick = function doneWork(){
        liInput.classList.toggle("done")
    }
    var doneText = document.createTextNode("Done")
    done.appendChild(doneText)
    liItem.appendChild(done)

    var span = document.createElement("span");
    span.className = "date";
    var spanText = document.createTextNode(" created at" + b);
    span.appendChild(spanText);
    liItem.appendChild(span);
}

function date() {
    var date = new Date();
    finalDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    }