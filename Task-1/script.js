const taskList = [];

taskList.forEach((task) => showTasks(task));

const form = document.querySelector('.form');
const tasks = document.querySelector('.task-list');
const message = document.querySelector('.message');

let id = 0;

function details(task) {
  const detail = document.createElement('div');

  const taskTitle = document.createElement('h1');
  taskTitle.classList.add('task-title');
  taskTitle.innerHTML = task.title;

  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-description');
  taskDescription.innerHTML = task.description;

  detail.appendChild(taskTitle);
  detail.appendChild(taskDescription);

  return detail;
}

function editBtn() {
  const editButton = document.createElement('button');
  editButton.classList.add('primary');
  editButton.innerHTML = 'Edit';
  editButton.value = id - 1;
  editButton.addEventListener('click', (e) => {
    editTask(e.target.value);
  });
  return editButton;
}

function deleteBtn() {
  const deleteButton = document.createElement('button');
  deleteButton.value = id - 1;
  deleteButton.classList.add('secondary');
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', (e) => {
    deleteTask(e.target.value);
  });
  return deleteButton;
}

function showTasks(data) {
  const task = document.createElement('div');
  task.classList.add('task');
  task.id = id;
  id++;

  task.appendChild(details(data));

  // edit and delete buttons
  const btn = document.createElement('div');

  btn.appendChild(editBtn());
  btn.appendChild(deleteBtn());

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
    form.task.value = '';
    form.description.value = '';
  }
}

function deleteTask(id) {
  document.getElementById(id).remove();
}

function editTask(id) {
  const taskToEdit = document.getElementById(id);
  form.task.value = taskToEdit.children[0].children[0].innerHTML;
  form.description.value = taskToEdit.children[0].children[1].innerHTML;

  document.querySelector('.task-list').classList.add('hidden');
  document.querySelector('.primary').classList.add('hidden');

  const update = document.createElement('button');
  update.classList.add('primary');
  update.innerHTML = 'Update';
  form.appendChild(update);
  update.addEventListener('click', () => {
    if (!form.task.value) {
      message.innerHTML = 'Please enter a task';
      message.classList.remove('success');
      message.classList.add('warning');
    } else {
      message.innerHTML = 'successfully updated';
      message.classList.remove('warning');
      message.classList.add('success');
      taskToEdit.children[0].children[0].innerHTML = form.task.value;
      taskToEdit.children[0].children[1].innerHTML = form.description.value;
      form.task.value = '';
      form.description.value = '';
      document.querySelector('.task-list').classList.remove('hidden');
      document.querySelector('.primary').classList.remove('hidden');
      update.remove();
      cancel.remove();
    }
  });

  const cancel = document.createElement('button');
  cancel.classList.add('secondary');
  cancel.innerHTML = 'Cancel';
  form.appendChild(cancel);
  cancel.addEventListener('click', () => {
    form.task.value = '';
    form.description.value = '';
    document.querySelector('.task-list').classList.remove('hidden');
    document.querySelector('.primary').classList.remove('hidden');
    update.remove();
    cancel.remove();
  });
}

form.addEventListener('submit', addTask);
