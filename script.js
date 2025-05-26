const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addButton = document.getElementById('add-todo');
addButton.onclick = function () {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function () {
            todoList.removeChild(todoItem);
        }
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
        todoInput.value = ''; // Clear input field after adding

        todoInput.focus(); // Focus back on input field
    }
    else {
        alert('Please enter a todo item.');
    }

}   