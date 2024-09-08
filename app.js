// we are picking our selectors to be available in our JS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Add Event Listerners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Create functions that would create todo for me

function addTodo(Event){
    // prevent the from (input type) from submitting
    event.preventDefault();
    // Ctreate todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create Li 
    const newTodo = document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-Item");
    todoDiv.appendChild(newTodo);
    // check mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML= '<i class = "fas fa-check">';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // check Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML= '<i class = "fas fa-trash">';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    // Append to the List
    todoList.appendChild(todoDiv);

    // clear the todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

    // deletw the todo button by clickingbthe trash btn
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    // CHECHMARK AREA
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = Array.from(todoList.children); 
    // Convert the HTMLCollection to an array
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}