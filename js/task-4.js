const valueRef = document.querySelector('#value');
console.log(valueRef);
const decrementRef = document.querySelector('[data-action="decrement"]');
console.log(decrementRef);
const incrementRef = document.querySelector('[data-action="increment"]');
console.log(incrementRef);
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
