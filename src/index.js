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

import { Layer } from './Layer/index';

const drinkSection = document.querySelector('.drink__info');

const item = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

for (let i = 0; i < item.length; i++) {
  drinkSection.innerHTML += Layer(item[i]);
}
