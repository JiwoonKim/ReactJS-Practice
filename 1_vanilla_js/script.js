

const input = document.querySelector('.new-task');
const todo_list = document.querySelector('.todo-list');
const count_view = document.querySelector('.count');

let total_count = 0;
let completed_count = 0;

//
document.addEventListener('DOMContentLoaded', () => {

    input.addEventListener('keyup', (event) => {
        if (event.key === "Enter") {
            addTodo(input.value);
            input.value = "";
        }
    });
});

// add todo-item to todo-list
const addTodo = (text) => {
    const todo_item = document.createElement('li');
    todo_item.classList.add('todo-item', 'task-box');
    todo_list.appendChild(todo_item);

    const todo_checkbox = document.createElement('button');
    todo_checkbox.classList.add('checkbox-round');
    todo_checkbox.textContent = "✔";
    todo_item.appendChild(todo_checkbox);
    todo_checkbox.addEventListener('click', () => checkTodo(todo_item));

    const todo_text = document.createElement('label');
    todo_text.classList.add('todo-text');
    todo_text.textContent = text;
    todo_item.appendChild(todo_text);
    
    const todo_delete = document.createElement('button');
    todo_delete.classList.add('delete-btn');
    todo_delete.textContent = "𝗫";
    todo_item.appendChild(todo_delete);

    total_count++;
    count_view.textContent = total_count;
};

const checkTodo = (todo_item) => {

    const todo_items = todo_item.childNodes;
    const todo_checkbox = todo_items[0];
    const todo_text = todo_items[1];

    if (todo_checkbox.classList.contains('checkbox-completed')) {
        todo_checkbox.classList.remove('checkbox-completed');
        todo_text.classList.remove('todo-text-completed');
        completed_count--;
    } else {
        todo_checkbox.classList.add('checkbox-completed');
        todo_text.classList.add('todo-text-completed');
        completed_count++;
    }
}