"use strict";
const tasks = [];
const tasksContainer = document.querySelector('.task-list');
const form = document.querySelector('.addTask');
const add = document.querySelector('.add');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});
add.addEventListener('click', (e) => {
    form.classList.toggle('hidden');
    add.textContent = form.classList.contains('hidden') ? 'Add Task' : 'Close';
});
function showTask(data, index) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    const doneDiv = document.createElement('button');
    doneDiv.classList.add('done-btn');
    if (data.done) {
        doneDiv.classList.add('done');
    }
    doneDiv.addEventListener('click', (e) => {
        doneDiv.classList.toggle('done');
        tasks.filter((task) => {
            if (task.title === data.title) {
                task.done = !task.done;
            }
            return task;
        });
    });
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 0 512 512');
    svgElement.innerHTML = `<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>`;
    doneDiv.appendChild(svgElement);
    const taskInfoDiv = document.createElement('div');
    taskInfoDiv.classList.add('task-info');
    const taskTitleDiv = document.createElement('div');
    taskTitleDiv.classList.add('task__title');
    taskTitleDiv.textContent = data.title;
    const taskDescriptionDiv = document.createElement('div');
    taskDescriptionDiv.classList.add('task__description');
    taskDescriptionDiv.textContent = data.description;
    taskInfoDiv.appendChild(taskTitleDiv);
    taskInfoDiv.appendChild(taskDescriptionDiv);
    const taskActionsDiv = document.createElement('div');
    taskActionsDiv.classList.add('task__actions');
    const editButton = document.createElement('button');
    editButton.classList.add('edit', 'btn');
    editButton.textContent = 'Edit';
    editButton.value = index.toString();
    editButton.addEventListener('click', (e) => {
        editTask(e);
    });
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete', 'btn');
    deleteButton.textContent = 'Delete';
    deleteButton.value = index.toString();
    deleteButton.addEventListener('click', (e) => deleteTask(e));
    taskActionsDiv.appendChild(editButton);
    taskActionsDiv.appendChild(deleteButton);
    taskDiv.appendChild(doneDiv);
    taskDiv.appendChild(taskInfoDiv);
    taskDiv.appendChild(taskActionsDiv);
    tasksContainer.appendChild(taskDiv);
}
function addTask() {
    const title = form.titleInput.value;
    const description = form.descriptionInput.value;
    if (!title) {
        alert('Title is required');
        return;
    }
    const task = {
        title,
        description,
        done: false,
    };
    tasks.unshift(task);
    form.titleInput.value = '';
    form.descriptionInput.value = '';
    render();
}
function editTask(e) {
    const index = parseInt(e.target.value);
    const task = tasks[index];
    form.titleInput.value = task.title;
    form.descriptionInput.value = task.description;
    tasksContainer.classList.add('hidden');
    const addBtn = document.querySelector('.add-btn');
    const add = document.querySelector('.add');
    addBtn.classList.add('hidden-btn');
    add.classList.add('hidden-btn');
    const update = document.createElement('button');
    update.classList.add('update', 'btn');
    update.textContent = 'Update';
    const cancel = document.createElement('button');
    cancel.classList.add('cancel', 'btn');
    cancel.textContent = 'Cancel';
    const formBtn = document.querySelector('.form-btn');
    formBtn.appendChild(update);
    formBtn.appendChild(cancel);
    cancel.addEventListener('click', (e) => {
        tasksContainer.classList.remove('hidden');
        addBtn.classList.remove('hidden-btn');
        add.classList.remove('hidden-btn');
        formBtn.removeChild(update);
        formBtn.removeChild(cancel);
    });
    update.addEventListener('click', (e) => {
        const title = form.titleInput.value;
        const description = form.descriptionInput.value;
        tasks[index] = { title, description, done: tasks[index].done };
        render();
        tasksContainer.classList.remove('hidden');
        addBtn.classList.remove('hidden-btn');
        add.classList.remove('hidden-btn');
        formBtn.removeChild(update);
        formBtn.removeChild(cancel);
        form.titleInput.value = '';
        form.descriptionInput.value = '';
    });
}
function deleteTask(e) {
    const index = parseInt(e.target.value);
    tasks.splice(index, 1);
    render();
}
function render() {
    tasksContainer.innerHTML = '';
    tasks.map((task, index) => showTask(task, index));
}
