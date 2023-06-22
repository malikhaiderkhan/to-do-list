function saveTasks(tasktodo) {
  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));
}

export default function addTask(description, tasktodo) {
  const newTask = {
    description,
    completed: false,
    index: tasktodo.length + 1,
  };

  tasktodo.push(newTask);
  saveTasks(tasktodo);
}
