interface Task {
  title: string;
  description: string;
  done: boolean;
}

interface TaskForm extends HTMLElement {
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
}

const tasks: Array<Task> = [];
const tasksContainer: HTMLElement = document.querySelector(
  '.task-list',
) as HTMLElement;

const form: TaskForm = document.querySelector('.addTask') as TaskForm;
const add: HTMLElement = document.querySelector('.add') as HTMLElement;

form.addEventListener('submit', (e): void => {
  e.preventDefault();
  addTask();
});

add.addEventListener('click', (e): void => {
  form.classList.toggle('hidden');
  add.textContent = form.classList.contains('hidden') ? 'Add Task' : 'Close';
});

function showTask(data: Task, index: number): void {
  // create task div
  const taskDiv: HTMLElement = document.createElement('div');
  taskDiv.classList.add('task');

  // create the done button div
  const doneDiv: HTMLButtonElement = document.createElement('button');
  doneDiv.classList.add('done-btn');
  if (data.done) {
    doneDiv.classList.add('done');
  }

  doneDiv.addEventListener('click', (e): void => {
    doneDiv.classList.toggle('done');
    tasks.filter((task: Task): Task => {
      if (task.title === data.title) {
        task.done = !task.done;
      }
      return task;
    });
  });

  // create the svg element
  const svgElement: SVGElementTagNameMap['svg'] = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg',
  );

  svgElement.setAttribute('viewBox', '0 0 512 512');
  svgElement.innerHTML = `<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>`;

  // append the svg to the done button div
  doneDiv.appendChild(svgElement);

  // create the task into div
  const taskInfoDiv: HTMLElement = document.createElement('div');
  taskInfoDiv.classList.add('task-info');

  // create the title div
  const taskTitleDiv: HTMLElement = document.createElement('div');
  taskTitleDiv.classList.add('task__title');
  taskTitleDiv.textContent = data.title;

  // create the task description div
  const taskDescriptionDiv: HTMLElement = document.createElement('div');
  taskDescriptionDiv.classList.add('task__description');
  taskDescriptionDiv.textContent = data.description;

  // append the title and description to the task info div
  taskInfoDiv.appendChild(taskTitleDiv);
  taskInfoDiv.appendChild(taskDescriptionDiv);

  // create task actions div
  const taskActionsDiv: HTMLElement = document.createElement('div');
  taskActionsDiv.classList.add('task__actions');

  // create action buttons
  const editButton: HTMLButtonElement = document.createElement('button');
  editButton.classList.add('edit', 'btn');
  editButton.textContent = 'Edit';
  editButton.value = index.toString();

  editButton.addEventListener('click', (e): void => {
    editTask(e);
  });

  // create delete button
  const deleteButton: HTMLButtonElement = document.createElement('button');
  deleteButton.classList.add('delete', 'btn');
  deleteButton.textContent = 'Delete';
  deleteButton.value = index.toString();

  deleteButton.addEventListener('click', (e) => deleteTask(e));

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

function addTask(): void {
  const title: string = form.titleInput.value;
  const description: string = form.descriptionInput.value;
  if (!title) {
    alert('Title is required');
    return;
  }
  const task: Task = {
    title,
    description,
    done: false,
  };
  tasks.unshift(task);
  form.titleInput.value = '';
  form.descriptionInput.value = '';
  render();
}

function editTask(e: Event): void {
  // const target = e.target as HTMLElement;
  // if (!target || !target.dataset.index) {
  //   console.error('No index found');
  //   return;
  // }
  const index: number = parseInt(
    (e.target as HTMLButtonElement).value,
  ) as number;
  const task: Task = tasks[index];
  form.titleInput.value = task.title;
  form.descriptionInput.value = task.description;
  tasksContainer.classList.add('hidden');

  const addBtn: HTMLElement = document.querySelector('.add-btn') as HTMLElement;
  const add: HTMLElement = document.querySelector('.add') as HTMLElement;
  addBtn.classList.add('hidden-btn');
  add.classList.add('hidden-btn');

  const update: HTMLButtonElement = document.createElement('button');
  update.classList.add('update', 'btn');
  update.textContent = 'Update';

  const cancel: HTMLButtonElement = document.createElement('button');
  cancel.classList.add('cancel', 'btn');
  cancel.textContent = 'Cancel';

  const formBtn = document.querySelector('.form-btn') as HTMLElement;
  formBtn.appendChild(update);
  formBtn.appendChild(cancel);

  cancel.addEventListener('click', (e): void => {
    tasksContainer.classList.remove('hidden');
    addBtn.classList.remove('hidden-btn');
    add.classList.remove('hidden-btn');
    formBtn.removeChild(update);
    formBtn.removeChild(cancel);
  });

  update.addEventListener('click', (e): void => {
    const title: string = form.titleInput.value;
    const description: string = form.descriptionInput.value;
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

function deleteTask(e: Event): void {
  const index: number = parseInt(
    (e.target as HTMLButtonElement).value,
  ) as number;
  tasks.splice(index, 1);
  render();
}

function render(): void {
  tasksContainer.innerHTML = '';
  tasks.map((task, index) => showTask(task, index));
}
