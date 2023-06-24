export function updateIndexes(tasktodo) {
  tasktodo.forEach((task, index) => {
    task.index = index + 1;
  });
}

export default function deleteTask(taskIndex, tasktodo) {
  tasktodo.splice(taskIndex - 1, 1);
  updateIndexes(tasktodo);
  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));
}