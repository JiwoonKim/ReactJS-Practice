

const input = document.querySelector('.new-task');
const todo_list = document.querySelector('.todo-list');
const count = document.querySelector('.count');

// add todo-item to todo-list
const addTodo = (text) => {
    const todo_item = document.createElement('li');
    todo_item.classList.add('todo-item', 'task-box');
    todo_list.appendChild(todo_item);

    const todo_checkbox = document.createElement('input');
    todo_checkbox.type = 'checkbox';
    todo_checkbox.classList.add('checkbox-round');
    todo_item.appendChild(todo_checkbox);

    const todo_text = document.createElement('label');
    todo_text.classList.add('todo-text');
    todo_text.textContent = text;
    todo_item.appendChild(todo_text);
    
    const todo_delete = document.createElement('button');
    todo_delete.classList.add('delete');
    todo_item.appendChild(todo_delete);

    count.textContent = count.textContent + 1;
}