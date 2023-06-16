const tasktodo = [
  {
    description: 'task1',
    completed: false,
    index: 1,
  },
  {
    description: 'task2',
    completed: false,
    index: 2,
  },
  {
    description: 'task3',
    completed: false,
    index: 3,
  },
];

function populateTaskList() {
  const taskList = document.getElementById('task-list');

  const sortedTasks = tasktodo.sort((a, b) => a.index - b.index);

  sortedTasks.forEach((task) => {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('span');
    checkbox.className = 'checkbox-icon';

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);

    taskList.appendChild(listItem);

    const image = document.createElement('img');
    image.src = '/images/dots.png';
    image.className = 'list-item-image';

    listItem.appendChild(image);

    const horizontalLine = document.createElement('hr');

    taskList.appendChild(horizontalLine);
  });
}

window.addEventListener('load', populateTaskList);