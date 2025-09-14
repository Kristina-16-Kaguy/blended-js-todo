export function renderTasks(TASKS) {
  TASKS.map(
    taskobj =>
      `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>t${taskobj.title}</h3>
        <p>${taskobj.description}</p>
      </li>`
  ).join('');
}
