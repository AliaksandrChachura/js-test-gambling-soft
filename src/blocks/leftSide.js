import facebook from '../assets/images/facebook-logo.svg'
import instagram from '../assets/images/instagram-logo.svg'
import youtube from '../assets/images/youtube-logo.svg'

const contacts = [facebook, instagram, youtube];

const leftSide = document.createElement('div');
leftSide.classList.add('wrapper-main_leftside');

contacts.forEach(item => {
  const wrapperImg = document.createElement('div');
  wrapperImg.classList.add('wrapper-main_img');
  wrapperImg.innerHTML = `<img src="${item}" alt="Logo" class="responsive">`;

  leftSide.appendChild(wrapperImg);
});

export default leftSide;