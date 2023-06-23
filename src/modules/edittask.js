export default function editTask(taskIndex, newDescription, tasktodo) {
  const task = tasktodo[taskIndex - 1];
  task.description = newDescription;
  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));
}