import Logo from '../assets/images/logo.svg';

const headerLanguage = JSON.parse(localStorage.getItem('language')).header;
const options = ['ua', 'by'];

// Create wrapper elements
const wrapperHeader = document.createElement('div');
wrapperHeader.classList.add('wrapper-header');

const wrapperHeaderLeft = document.createElement('div');
wrapperHeaderLeft.classList.add('wrapper-header_left');

const wrapperHeaderLogo = document.createElement('div');
wrapperHeaderLogo.classList.add('wrapper-header_logo');

const imgLogo = document.createElement('img');
imgLogo.src = Logo;
imgLogo.alt = 'Logo';

const wrapperHeaderNav = document.createElement('div');
wrapperHeaderNav.classList.add('wrapper-header_nav');

// Add navigation links
const navLinks = ['directions', 'help', 'history'];
navLinks.forEach(link => {
  const divLink = document.createElement('div');
  const aLink = document.createElement('a');
  aLink.href = '#';
  aLink.textContent = headerLanguage[link];
  divLink.appendChild(aLink);
  wrapperHeaderNav.appendChild(divLink);
});

// Append elements together
wrapperHeaderLogo.appendChild(imgLogo);
wrapperHeaderLeft.appendChild(wrapperHeaderLogo);
wrapperHeaderLeft.appendChild(wrapperHeaderNav);

wrapperHeader.appendChild(wrapperHeaderLeft);

const wrapperHeaderRight = document.createElement('div');
wrapperHeaderRight.classList.add('wrapper-header_right');

const headerContacts = document.createElement('div');
headerContacts.classList.add('wrapper-header_contacts');

const headerContactsMail = document.createElement('div');
headerContactsMail.textContent = headerLanguage.mail.toUpperCase();

const headerContactsPhone = document.createElement('div');
headerContactsPhone.textContent = headerLanguage.phone;

headerContacts.appendChild(headerContactsMail);
headerContacts.appendChild(headerContactsPhone);

const headerLang = document.createElement('div');
headerLang.classList.add('wrapper-header_lang');

const headerLangSelect = document.createElement('select');
headerLangSelect.classList.add('wrapper-header_select');

options.forEach(item => {
  const option = document.createElement('option');
  option.setAttribute("value", item);
  option.textContent = item;

  headerLangSelect.appendChild(option)
})

headerLang.appendChild(headerLangSelect);

wrapperHeaderRight.appendChild(headerContacts);
wrapperHeaderRight.appendChild(headerLang);

wrapperHeader.appendChild(wrapperHeaderRight);

export default wrapperHeader;
