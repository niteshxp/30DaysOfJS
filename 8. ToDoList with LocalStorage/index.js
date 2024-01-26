document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");

    // Load todos from local storage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log(localStorage.todos);
    // Render todos
    function renderTodos() {
        todoList.innerHTML = "";

        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.textContent = todo;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.addEventListener("click", () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }

    // Save todos to local storage
    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // Add todo
    addTodoBtn.addEventListener("click", () => {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            todos.push(todoText);
            saveTodos();
            renderTodos();
            todoInput.value = "";
        }
    });

    // Initial render
    renderTodos();
});
