import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.innerHTML = `
<div class="drink">
<div class="drink__product">
  <div class="drink__cup">
    <img src="/assets/cups/${props.id}.png" />
  </div>
  <div class="drink__info">
    <h3>${props.name}</h3>
  </div>
</div>
<div class="drink__controls">
  <button class="order-btn">Objednat</button>
</div>
</div>
`;

  const drinkSection = drinkElm.querySelector('.drink__info');
  for (let i = 0; i < props.layers.length; i++) {
    drinkSection.innerHTML += Layer(props.layers[i]);
  }

  const btnElm = drinkElm.querySelector('.order-btn');
  btnElm.addEventListener('click', () => {
    if (props.ordered === false) {
      btnElm.textContent = 'Zrušit';
      drinkElm
        .querySelector('.drink__cup')
        .classList.add('drink__cup--selected');
      props.ordered = true;
    } else {
      drinkElm
        .querySelector('.drink__cup')
        .classList.remove('drink__cup--selected');
      btnElm.innerHTML = 'Objednat';
      props.ordered = false;
    }
  });

  return drinkElm;
};
