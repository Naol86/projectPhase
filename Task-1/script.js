const taskList = [];

taskList.forEach((task) => showTasks(task));

const form = document.querySelector('.form');
const tasks = document.querySelector('.task-list');
const message = document.querySelector('.message');

function showTasks(data) {
  const task = document.createElement('div');
  task.classList.add('task');

  // task title and description
  const detail = document.createElement('div');

  const taskTitle = document.createElement('h1');
  taskTitle.classList.add('task-title');
  taskTitle.innerHTML = data.title;

  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-description');
  taskDescription.innerHTML = data.description;

  detail.appendChild(taskTitle);
  detail.appendChild(taskDescription);
  task.appendChild(detail);

  // edit and delete buttons
  const btn = document.createElement('div');
  // btn.classList.add('btn');
  const editButton = document.createElement('button');
  editButton.classList.add('primary');
  editButton.innerHTML = 'Edit';
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('secondary');
  deleteButton.innerHTML = 'Delete';
  btn.appendChild(editButton);
  btn.appendChild(deleteButton);

  task.appendChild(btn);
  tasks.appendChild(task);
}

function addTask(e) {
  e.preventDefault();
  if (!form.task.value) {
    message.innerHTML = 'Please enter a task';
    message.classList.remove('success');
    message.classList.add('warning');
  } else {
    message.innerHTML = 'successfully added';
    message.classList.remove('warning');
    message.classList.add('success');
    const task = {
      title: form.task.value,
      description: form.description.value,
    };
    taskList.push(task);
    showTasks(task);
  }
}

form.addEventListener('submit', addTask);
