// Make sure refs is defined or imported here
import { refs } from './refs.js';

export function renderTasks(TASKS) {
  refs.tasksContainer.innerHTML = TASKS.map(
    taskobj =>
      `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>t${taskobj.title}</h3>
        <p>${taskobj.description}</p>
      </li>`
  ).join('');
}
