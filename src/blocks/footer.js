import calendarLogo from '../assets/images/calendar-logo.svg'
import capLogo from '../assets/images/cap-logo.svg'
import handsLogo from '../assets/images/hands-logo.svg'

const logos = [calendarLogo, capLogo, handsLogo];
const footerLanguage = Object.values(JSON.parse(localStorage.getItem('language')).footer);
const years = [5, 900, 40];

function createElements() {
 const footer = document.createElement("div");
 footer.classList.add('wrapper-footer');
 const container = document.createElement("div");
 container.classList.add('wrapper-footer_container');

 logos.forEach((item, index) => {
   const element = document.createElement('div');
   element.classList.add('wrapper-footer_card');
   const text = document.createElement('div');
   text.innerHTML = `<div class="wrapper-footer_description"><p>${years[index]} +</p><p>${footerLanguage[index]}</p></div>`;
   element.innerHTML = `<img src="${item}" alt="Logo" class="footer-logo">`;
   element.append(text);

   container.appendChild(element);
 });
 
 footer.appendChild(container);

 return footer;
}

const footer = createElements();

export default footer;