var input = document.getElementById("input");

function add() {
    var list = document.getElementById("list");
    if (input.value) {
        input.placeholder = "Add item..."
        list.innerHTML += `<li class='list'> 
        <input type='text' value='${input.value}' disabled/>
        <button class='btndel' onclick="del(event)">Delete</button>
        <button class='btnedit' onclick="edit(event)">Edit</button> </li>`
        input.value = ""
        window.scrollTo(0, document.body.scrollHeight);
    }
    else {
        input.placeholder = "please Enter any value";

    }
}

function addEnter(event) {
    if (event.keyCode === 13) {
        add()
    }
}

function del(event) {
    event.target.parentNode.remove()
    window.scrollTo(0, document.body.scrollHeight);
}

function edit(event) {
    var input = event.target.parentNode.childNodes[1];
    input.disabled = false;
    input.focus()
    input.value = "";
    event.target.innerHTML = "Update";
    event.target.setAttribute("onclick", "update(event)");
    input.style.borderBottom = '2px solid red';

}

function update(event) {
    var input = event.target.parentNode.childNodes[1];
    input.disabled = true;
    event.target.innerHTML = "Edit";
    event.target.setAttribute("onclick", "edit(event)");
    input.style.borderBottom = "1px solid gray";

}

function delAll(){
    list.innerHTML = ""
    window.scrollTo(0, document.body.scrollHeight);
}

