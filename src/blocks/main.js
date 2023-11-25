import leftSide from './leftSide'
import rightSide from './rightSide'
import student1 from '../assets/images/student1.png'
import student2 from '../assets/images/student2.png'
import student3 from '../assets/images/student3.png'
import playLogo from '../assets/images/play-logo.svg'
import arrowRight from '../assets/images/arrow-right-logo.svg'

const mainLanguage = JSON.parse(localStorage.getItem('language')).main;
const students = [student1, student2, student3];

const main = document.createElement('div');
main.classList.add('wrapper-main');

const leftSideElement = document.createElement('div');
leftSideElement.appendChild(leftSide);

const mainBlock = document.createElement('div');
mainBlock.classList.add('wrapper-main_block')
//
const mainBlockLeft = document.createElement('div');
mainBlockLeft.classList.add('wrapper-main_leftBlock');
const centralPart = document.createElement('div');
centralPart.classList.add('wrapper-main_leftBlock-main');

const firstLine = document.createElement('div');
firstLine.classList.add('wrapper-main_leftBlock-firstLine');
const firstLineButton = document.createElement('div');
firstLineButton.classList.add('image-with-text');
firstLineButton.innerHTML = `<span class="text">${mainLanguage.sound}</span>
<img src="${playLogo}" alt="Image Description">`
firstLine.appendChild(firstLineButton);

const secondLine = document.createElement('div');
secondLine.classList.add('wrapper-main_leftBlock-secondLine');
secondLine.textContent = mainLanguage.cursor;

const thirdLine = document.createElement('div');
thirdLine.classList.add('wrapper-main_leftBlock-thirdLine');
thirdLine.innerHTML = `<p>${mainLanguage.school}</p>`;

const fourthLine = document.createElement('div');
fourthLine.classList.add('wrapper-main_leftBlock-fourthLine');
const button = document.createElement('div');
button.classList.add('wrapper-main_button');
button.innerHTML = `<span class="button-text">${mainLanguage.button}</span>
<img src="${arrowRight}" alt="Image Description">`
firstLine.appendChild(firstLineButton);
fourthLine.appendChild(button);

centralPart.appendChild(firstLine);
centralPart.appendChild(secondLine);
centralPart.appendChild(thirdLine);
centralPart.appendChild(fourthLine);

mainBlockLeft.appendChild(centralPart);
//
const mainBlockRight = document.createElement('div');
mainBlockRight.classList.add('image-container');
mainBlockRight.innerHTML = `<img id="mainImage" src="${student1}" alt="Description of the image" class="responsive"></img>`;
mainBlock.appendChild(mainBlockLeft);
mainBlock.appendChild(mainBlockRight);

main.appendChild(leftSideElement);
main.appendChild(mainBlock);
main.appendChild(rightSide);

export default main;