var tasks = [];
var tasksContainer = document.querySelector('.task-list');
var form = document.querySelector('.addTask');
var add = document.querySelector('.add');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});
add.addEventListener('click', function (e) {
    form.classList.toggle('hidden');
    add.textContent = form.classList.contains('hidden') ? 'Add Task' : 'Close';
});
function showTask(data, index) {
    // create task div
    var taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    // create the done button div
    var doneDiv = document.createElement('button');
    doneDiv.classList.add('done-btn');
    if (data.done) {
        doneDiv.classList.add('done');
    }
    doneDiv.addEventListener('click', function (e) {
        doneDiv.classList.toggle('done');
        tasks.filter(function (task) {
            if (task.title === data.title) {
                task.done = !task.done;
            }
            return task;
        });
    });
    // create the svg element
    var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('viewBox', '0 0 512 512');
    svgElement.innerHTML = "<path d=\"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z\"/>";
    // append the svg to the done button div
    doneDiv.appendChild(svgElement);
    // create the task into div
    var taskInfoDiv = document.createElement('div');
    taskInfoDiv.classList.add('task-info');
    // create the title div
    var taskTitleDiv = document.createElement('div');
    taskTitleDiv.classList.add('task__title');
    taskTitleDiv.textContent = data.title;
    // create the task description div
    var taskDescriptionDiv = document.createElement('div');
    taskDescriptionDiv.classList.add('task__description');
    taskDescriptionDiv.textContent = data.description;
    // append the title and description to the task info div
    taskInfoDiv.appendChild(taskTitleDiv);
    taskInfoDiv.appendChild(taskDescriptionDiv);
    // create task actions div
    var taskActionsDiv = document.createElement('div');
    taskActionsDiv.classList.add('task__actions');
    // create action buttons
    var editButton = document.createElement('button');
    editButton.classList.add('edit', 'btn');
    editButton.textContent = 'Edit';
    editButton.dataset.index = index.toString();
    editButton.addEventListener('click', function (e) {
        editTask(e);
    });
    // create delete button
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete', 'btn');
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.index = index.toString();
    deleteButton.addEventListener('click', function (e) { return deleteTask(e); });
    // append the buttons to the task actions div
    taskActionsDiv.appendChild(editButton);
    taskActionsDiv.appendChild(deleteButton);
    // append the done button, task info and task actions to the task div
    taskDiv.appendChild(doneDiv);
    taskDiv.appendChild(taskInfoDiv);
    taskDiv.appendChild(taskActionsDiv);
    // append the task div to the tasks container
    tasksContainer.appendChild(taskDiv);
}
function addTask() {
    var title = form.titleInput.value;
    var description = form.descriptionInput.value;
    if (!title) {
        alert('Title is required');
        return;
    }
    var task = {
        title: title,
        description: description,
        done: false,
    };
    tasks.unshift(task);
    form.titleInput.value = '';
    form.descriptionInput.value = '';
    render();
}
function editTask(e) {
    var index = parseInt(e.target.dataset.index);
    var task = tasks[index];
    form.titleInput.value = task.title;
    form.descriptionInput.value = task.description;
    tasksContainer.classList.add('hidden');
    document.querySelector('.add-btn').classList.add('hidden-btn');
    document.querySelector('.add').classList.add('hidden-btn');
    var update = document.createElement('button');
    update.classList.add('update', 'btn');
    update.textContent = 'Update';
    var cancel = document.createElement('button');
    cancel.classList.add('cancel', 'btn');
    cancel.textContent = 'Cancel';
    var formBtn = document.querySelector('.form-btn');
    formBtn.appendChild(update);
    formBtn.appendChild(cancel);
    cancel.addEventListener('click', function (e) {
        tasksContainer.classList.remove('hidden');
        document.querySelector('.add-btn').classList.remove('hidden-btn');
        document.querySelector('.add').classList.remove('hidden-btn');
        formBtn.removeChild(update);
        formBtn.removeChild(cancel);
    });
    update.addEventListener('click', function (e) {
        var title = form.titleInput.value;
        var description = form.descriptionInput.value;
        tasks[index] = { title: title, description: description, done: false };
        render();
        tasksContainer.classList.remove('hidden');
        document.querySelector('.add-btn').classList.remove('hidden-btn');
        document.querySelector('.add').classList.remove('hidden-btn');
        formBtn.removeChild(update);
        formBtn.removeChild(cancel);
        form.titleInput.value = '';
        form.descriptionInput.value = '';
    });
}
function deleteTask(e) {
    var index = parseInt(e.target.dataset.index);
    tasks.splice(index, 1);
    render();
}
function render() {
    tasksContainer.innerHTML = '';
    tasks.map(function (task, index) { return showTask(task, index); });
}
