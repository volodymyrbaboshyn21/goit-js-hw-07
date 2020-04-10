const inputRef = document.querySelector('input#name-input');
console.log(inputRef);

const spanRef = document.querySelector('span#name-output');
console.log(spanRef);

inputRef.addEventListener('input', event => {
  spanRef.textContent = event.target.value;
  if (spanRef.textContent === '') {
    spanRef.textContent = 'незнакомец';
  }
});
