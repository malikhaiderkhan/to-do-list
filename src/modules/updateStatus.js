export function checked(tasktodo, taskIndex) {
  const task = tasktodo.find((obj) => obj.index === taskIndex);
  task.completed = true;
  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));
}
export function unchecked(tasktodo, taskIndex) {
  const task = tasktodo.find((obj) => obj.index === taskIndex);
  task.completed = false;
  localStorage.setItem('tasktodo', JSON.stringify(tasktodo));
}