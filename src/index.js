import addTask from './modules/addtask.js';
import deleteTask, { updateIndexes } from './modules/deletetask.js';
import editTask from './modules/edittask.js';
import { checked, unchecked } from './modules/updateStatus.js';

let tasktodo = [];

function saveTaskDescription(taskDescription, taskIndex) {
  const newDescription = taskDescription.textContent.trim();
  editTask(taskIndex, newDescription, tasktodo);
}

function editTaskDescription(taskDescription) {
  taskDescription.contentEditable = true;
  taskDescription.focus();
  taskDescription.style.outline = 'none';
}

function toggleTaskCompleted(taskIndex, checkbox) {
  const listItem = checkbox.parentElement.parentElement;
  const taskDescription = listItem.querySelector('span');

  if (checkbox.checked) {
    checked(tasktodo, taskIndex);
    listItem.classList.add('completed');
    taskDescription.classList.add('completed');
  } else {
    unchecked(tasktodo, taskIndex);
    listItem.classList.remove('completed');
    taskDescription.classList.remove('completed');
  }
}

function populateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  const sortedTasks = [...tasktodo].sort((a, b) => a.index - b.index);

  sortedTasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.dataset.index = task.index;
    if (task.completed) {
      listItem.classList.add('completed');
    }

    const checkboxWrapper = document.createElement('label');
    checkboxWrapper.className = 'checkbox-wrapper';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.className = 'checkbox-icon';

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;

    checkboxWrapper.appendChild(checkbox);
    listItem.appendChild(checkboxWrapper);
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
        const taskIndex = parseInt(listItem.dataset.index, 10);
        saveTaskDescription(taskDescription, taskIndex);
        populateTaskList();
      }
    });

    checkbox.addEventListener('change', () => {
      const taskIndex = parseInt(listItem.dataset.index, 10);
      toggleTaskCompleted(taskIndex, checkbox);
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

function removeCheckedTasks() {
  tasktodo = tasktodo.filter((task) => !task.completed);
  updateIndexes(tasktodo);
  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));
  populateTaskList();
}

document.getElementById('bclear').addEventListener('click', removeCheckedTasks);