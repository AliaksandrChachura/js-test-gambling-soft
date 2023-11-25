import './styles/styles.css'
import './wrapper/wrapper';
import { ukrainian, belarusian } from './models/languages.js';
localStorage.setItem('language', JSON.stringify(ukrainian));
if(!localStorage.getItem('language')) {
 console.log(localStorage.getItem('language'));
 localStorage.setItem('language', JSON.stringify(ukrainian));
};
// const select = document.querySelector('.wrapper-header_select');
// select.addEventListener('change', (e) => {
//  e.target.value === 'ua' ? localStorage.setItem('language', JSON.stringify(ukrainian))
//   : localStorage.setItem('language', JSON.stringify(belarusian));
//  console.log(e.target.value, console.log(localStorage.getItem('language')));
// })
