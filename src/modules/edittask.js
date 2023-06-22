function saveTasks(tasktodo) {
  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));
}

export default function editTask(taskIndex, newDescription, tasktodo) {
  const task = tasktodo[taskIndex - 1];
  task.description = newDescription;
  saveTasks(tasktodo);
}