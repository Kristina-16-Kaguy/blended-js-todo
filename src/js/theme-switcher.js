import { refs } from './refs';

// bodyEl;

// refs.themeBtn.addEventListener('click', (event) => {
//     if(target )
// });

const lightTheme = 'theme-light';
const darkTheme = 'theme-dark';

export function changeTheme() {
  if (refs.bodyEl.classList.contains(darkTheme)) {
    refs.bodyEl.classList.remove(darkTheme);
    refs.bodyEl.classList.add(lightTheme);
  } else {
    refs.bodyEl.classList.remove(lightTheme);
    refs.bodyEl.classList.add(darkTheme);
  }
}
