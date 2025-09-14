import { getFormLs, saveInLs } from './local-storage-api';
import { renderTasks } from './render-tasks';

let TASKS = [];
const key = 'tasks';

export function addTask(title, description) {
  TASKS.push({ title, description });
  renderTasks(TASKS);
  saveInLs(key, TASKS);
}

export function deleteTask(title) {
  TASKS = TASKS.filter(taskobj => taskobj.title !== title);
  renderTasks(TASKS);
  saveInLs(key, TASKS);
}

export function initTasks() {
  TASKS = getFormLs(key) ?? [];
  renderTasks(TASKS);
}

// [
//   {
//     title: 'Shopping',
//     description: 'bread, mild',
//   },
//   {
//     title: 'house cleaning',
//     description: 'Vaccum, mop, broom',
//   },
//   {
//     title: 'coocking',
//     description: 'Cake, soup',
//   },
// ];
