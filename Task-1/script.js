const tasks = [];
const tasksContainer = document.querySelector('.task-list');

const form = document.querySelector('.addTask');
// const formBtn = document.querySelector('.form-btn');
const add = document.querySelector('.add');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});

add.addEventListener('click', () => {
  form.classList.toggle('hidden');
  add.innerHTML = form.classList.contains('hidden') ? 'Add Task' : 'Close';
});

function showTask(data, index) {
  // Create the task div
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  // Create the done button div
  const doneDiv = document.createElement('div');
  doneDiv.classList.add('done-btn');
  if (data.done) {
    doneDiv.classList.add('done');
  }

  doneDiv.addEventListener('click', () => {
    doneDiv.classList.toggle('done');
    tasks.filter((task) => {
      if (task.title === data.title) {
        task.done = !task.done;
      }
      return task;
    });
  });

  // Create the SVG element
  const svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg',
  );
  svgElement.setAttribute('viewBox', '0 0 512 512');
  svgElement.innerHTML = `<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>`;

  // Append the SVG to the done button div
  doneDiv.appendChild(svgElement);

  // Create the task info div
  const taskInfoDiv = document.createElement('div');
  taskInfoDiv.classList.add('task-info');

  // Create the task title div
  const taskTitleDiv = document.createElement('div');
  taskTitleDiv.classList.add('task__title');
  taskTitleDiv.textContent = data.title;

  // Create the task description div
  const taskDescriptionDiv = document.createElement('div');
  taskDescriptionDiv.classList.add('task__description');
  taskDescriptionDiv.textContent = data.description;

  // Append the title and description to the task info div
  taskInfoDiv.appendChild(taskTitleDiv);
  taskInfoDiv.appendChild(taskDescriptionDiv);

  // Create the task actions div
  const taskActionsDiv = document.createElement('div');
  taskActionsDiv.classList.add('task__actions');

  // Create the edit button
  const editButton = document.createElement('button');
  editButton.classList.add('edit', 'btn');
  editButton.textContent = 'Edit';
  editButton.value = index;

  editButton.addEventListener('click', (e) => {
    editTask(e);
  });

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete', 'btn');
  deleteButton.textContent = 'Delete';
  deleteButton.value = index;

  deleteButton.addEventListener('click', (e) => {
    deleteTask(e);
  });

  // Append the buttons to the task actions div
  taskActionsDiv.appendChild(editButton);
  taskActionsDiv.appendChild(deleteButton);

  // Append the done button, task info, and task actions to the task div
  taskDiv.appendChild(doneDiv);
  taskDiv.appendChild(taskInfoDiv);
  taskDiv.appendChild(taskActionsDiv);

  // Append the task div to the main task container
  tasksContainer.appendChild(taskDiv);
}

function render() {
  tasksContainer.innerHTML = '';
  tasks.map((task, index) => showTask(task, index));
}

function addTask() {
  const title = form.title.value;
  if (!title) {
    alert('Please enter a title');
    return;
  }
  const description = form.description.value;
  const done = false;
  const task = { title, description, done: false };
  tasks.unshift(task);
  form.title.value = '';
  form.description.value = '';
  render();
}

function deleteTask(e) {
  const index = e.target.value;
  tasks.splice(index, 1);
  render();
}

function editTask(e) {
  const index = e.target.value;
  const task = tasks[index];
  document.querySelector('#title').value = task.title;
  document.querySelector('#description').value = task.description;
  tasksContainer.classList.add('hidden');
  document.querySelector('.add-btn').classList.add('hidden-btn');

  document.querySelector('.add').classList.add('hidden-btn');

  const update = document.createElement('button');
  update.classList.add('update', 'btn');
  update.textContent = 'Update';

  const cancel = document.createElement('button');
  cancel.classList.add('cancel', 'btn');
  cancel.textContent = 'Cancel';

  const formBtn = document.querySelector('.form-btn');
  formBtn.appendChild(update);
  formBtn.appendChild(cancel);

  cancel.addEventListener('click', () => {
    tasksContainer.classList.remove('hidden');
    document.querySelector('.add-btn').classList.remove('hidden-btn');
    document.querySelector('.add').classList.remove('hidden-btn');
    formBtn.removeChild(update);
    formBtn.removeChild(cancel);
    form.title.value = '';
    form.description.value = '';
  });

  update.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    tasks[index] = { title, description, done: false };
    render();
    tasksContainer.classList.remove('hidden');
    document.querySelector('.add-btn').classList.remove('hidden-btn');
    document.querySelector('.add').classList.remove('hidden-btn');
    formBtn.removeChild(update);
    formBtn.removeChild(cancel);
    form.title.value = '';
    form.description.value = '';
  });
}
