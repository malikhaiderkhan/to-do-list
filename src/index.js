import addTask from './modules/addtask.js';
import deleteTask from './modules/deletetask.js';
import editTask from './modules/edittask.js';

let tasktodo = [];

function saveTaskDescription(taskDescription, tasktodo) {
  const listItem = taskDescription.parentElement;
  const taskIndex = parseInt(listItem.dataset.index, 10);
  const newDescription = taskDescription.textContent.trim();
  editTask(taskIndex, newDescription, tasktodo);
}

function editTaskDescription(taskDescription) {
  taskDescription.contentEditable = true;
  taskDescription.focus();
  taskDescription.style.outline = 'none';
}

function populateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  const sortedTasks = [...tasktodo].sort((a, b) => a.index - b.index);

  sortedTasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.dataset.index = task.index;

    const checkbox = document.createElement('span');
    checkbox.className = 'checkbox-icon';

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);

    const image = document.createElement('img');
    image.src = '/images/del.png';
    image.className = 'list-item-image';

    listItem.appendChild(image);

    const horizontalLine = document.createElement('hr');

    taskList.appendChild(listItem);
    taskList.appendChild(horizontalLine);

    taskDescription.addEventListener('click', (event) => {
      event.stopPropagation();
      editTaskDescription(taskDescription);
    });

    taskDescription.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        saveTaskDescription(taskDescription, tasktodo);
        populateTaskList();
      }
    });
  });
}

function loadTasks() {
  const savedTasks = localStorage.getItem('tasktodo');
  if (savedTasks) {
    tasktodo = JSON.parse(savedTasks);
  }
  populateTaskList();
}

window.addEventListener('load', loadTasks);

document.getElementById('add-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const taskInput = document.getElementById('add-input');
    const description = taskInput.value.trim();

    if (description !== '') {
      addTask(description, tasktodo);
      taskInput.value = '';
      populateTaskList();
    }
  }
});

document.getElementById('task-list').addEventListener('click', (event) => {
  const deleteIcon = event.target.closest('.list-item-image');
  if (deleteIcon) {
    const listItem = deleteIcon.parentElement;
    const taskIndex = parseInt(listItem.dataset.index, 10);
    deleteTask(taskIndex, tasktodo);
    populateTaskList();
  }
});