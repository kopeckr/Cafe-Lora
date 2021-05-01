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

const menu = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
];

const Layer = (props) => {
  return `
    <div class="layer">
    <div class="layer__color" style="background-color:${props.color}"></div>
    <div class="layer__label">${props.label}</div>
`;
};

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

//  <div class="layer">
//    <div
//      class="layer__color"
//      style="background-color: #feeeca"
//    ></div>
//    <div class="layer__label">mléčná pěna</div>
//  </div>
//  <div class="layer">
//    <div
//      class="layer__color"
//      style="background-color: #fed7b0"
//    ></div>
//    <div class="layer__label">teplé mléko</div>
//
//  <div class="layer">
//    <div
//      class="layer__color"
//      style="background-color: #613916"
//    ></div>
//    <div class="layer__label">espresso</div>
//  </div>
