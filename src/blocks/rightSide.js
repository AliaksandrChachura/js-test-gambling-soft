import ellipseMarker from '../assets/images/ellipse-marker.svg';

const students = [
  require('../assets/images/student1.png'),
  require('../assets/images/student2.png'),
  require('../assets/images/student3.png')
];

const arrowUp = require('../assets/images/arrow-up.svg');
const arrowDown = require('../assets/images/arrow-down.svg');

const itemsPerPage = 3;
let currentIndex = 0;

function createCarousel() {
  const carouselContainer = document.createElement('div');
  carouselContainer.className = 'carousel-container';

  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  const prevButton = document.createElement('div');
  prevButton.className = 'carousel-control-prev';
  prevButton.onclick = () => changeSlide(-1);
  prevButton.innerHTML = `<img src="${arrowUp}" alt="Logo" class="responsive">`;

  const carouselInner = document.createElement('div');
  carouselInner.className = 'carousel-inner';

  const nextButton = document.createElement('div');
  nextButton.className = 'carousel-control-next';
  nextButton.onclick = () => changeSlide(1);
  nextButton.innerHTML = `<img src="${arrowDown}" alt="Logo" class="responsive">`;

  students.forEach((student, index) => {
    const wrapper = document.createElement('div');
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `<img src="${student}" alt="Image ${index}" class="responsive">`;
    
    item.onclick = () => changeImage(index);
    wrapper.appendChild(item);
    if (index !== 0) {
      item.insertAdjacentHTML('afterend', `<div class="small-image" id="smallImgContainer">
        <img id="smallImg" src="${ellipseMarker}" alt="Small Image">
      </div>`)
    } else {
      item.insertAdjacentHTML('afterend', `<div class="small-image small-image_visiable" id="smallImgContainer">
        <img id="smallImg" src="${ellipseMarker}" alt="Small Image">
      </div>`)
    }
    carouselInner.appendChild(wrapper);
  });

  carousel.appendChild(prevButton);
  carousel.appendChild(carouselInner);
  carousel.appendChild(nextButton);

  carouselContainer.appendChild(carousel);

  return carouselContainer;
}

function changeSlide(n) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  items.forEach(item => item.classList.remove('selected'));
  let newIndex = (currentIndex + n + totalItems) % totalItems;
  
  if (newIndex < 0) {
    newIndex = totalItems - 1;
  }
  
  currentIndex = newIndex;
  
  changeImage(currentIndex)
}

function changeImage(index) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = students[index];

  showSlide(index);
}

function showSlide(index) {
  const items = document.querySelectorAll('.small-image');
  console.log(items);
  items.forEach(item => item.classList.remove('small-image_visiable'));
  items[index].classList.add('small-image_visiable');
}

const rightSide = createCarousel();

export default rightSide;