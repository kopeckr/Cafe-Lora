import './style.css';
import { Drink } from './Drink/index';

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

// let ordered = 'false';
// const btnElm = document.querySelector('.order-btn');

// const changeText = () => {
//   if (ordered === 'false') {
//     btnElm.textContent = 'Zrušit';
//     document.querySelector('.drink__cup').classList.add('drink__cup--selected');
//     ordered = 'true';
//   } else {
//     document
//       .querySelector('.drink__cup')
//       .classList.remove('drink__cup--selected');
//     btnElm.innerHTML = 'Objednat';
//     ordered = 'false';
//   }
// };

// btnElm.addEventListener('click', changeText);

//=============================================

import { Layer } from './Layer/index';

// const drinkSection = document.querySelector('.drink__info');

const layers = [
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

// for (let i = 0; i < layers.length; i++) {
//   drinkSection.innerHTML += Layer(layers[i]);
// }

document.querySelector('.drinks-list').appendChild(
  Drink({
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  }),
);
