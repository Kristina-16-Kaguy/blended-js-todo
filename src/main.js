import { refs } from './js/refs';
import { addTask, deleteTask, initTasks } from './js/tasks';

/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

initTasks();

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const title = refs.taskNameInput.value.trim();
  const description = refs.taskDescrInput.value.trim();

  if (!title || !description) {
    alert('Input cannot be empty!');
    return;
  } else {
    addTask(title, description);
    refs.form.reset();
  }
});

refs.delBtn.addEventListener('click', event => {
  const title = event.target.closest('.task-list-item').querySelector('h3');
  deleteTask(title);
});
