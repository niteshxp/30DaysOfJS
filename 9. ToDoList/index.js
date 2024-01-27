const input = document.getElementById("input")
const btn = document.getElementById("btn")
const todolist = document.getElementById("todolist")

const todos = JSON.parse(localStorage.getItem('todos')) || [];

function createList() {
    todolist.innerHTML = "";
    todos.map((todo) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const deletebtn = document.createElement("button")
        deletebtn.innerText = 'X'
        deletebtn.addEventListener('click', () => {
            todolist.removeChild(li)
        })
        li.appendChild(deletebtn);
        todolist.appendChild(li);
    })
}

function addtodo() {
    let task = input.value;
    if (task === "") return
    todos.push(task)
    localStorage.setItem("todos", JSON.stringify(todos));
    createList();
}

btn.addEventListener('click', addtodo)