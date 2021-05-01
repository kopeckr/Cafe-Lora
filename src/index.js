import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');
const navBtn = document.querySelector('#nav-btn');

const showNav = () => {
  navElm.classList.toggle('nav-closed');
};

navBtn.addEventListener('click', showNav);

const navAllElm = document.querySelectorAll('nav a');
navAllElm.forEach((elm) => {
  elm.addEventListener('click', showNav);
});

let ordered = 'false';
const btnElm = document.querySelector('.order-btn');

const changeText = () => {
  if (ordered === 'false') {
    btnElm.textContent = 'Zrušit';
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    ordered = 'true';
  } else {
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    btnElm.innerHTML = 'Objednat';
    ordered = 'false';
  }
};

btnElm.addEventListener('click', changeText);
