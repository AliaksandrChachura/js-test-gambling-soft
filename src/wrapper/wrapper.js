import header from '../blocks/header';
import main from '../blocks/main';
import footer from '../blocks/footer';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const headerElement = document.createElement('div');
headerElement.appendChild(header);

const mainElement = document.createElement('div');
headerElement.appendChild(main);

const footerElement = document.createElement('div');
headerElement.appendChild(footer);

wrapper.appendChild(headerElement);
wrapper.appendChild(mainElement);
wrapper.appendChild(footerElement);

document.body.appendChild(wrapper);
export default wrapper;
