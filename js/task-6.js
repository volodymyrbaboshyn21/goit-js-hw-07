const inputRef = document.querySelector('input#validation-input');
console.log(inputRef);
inputRef.classList.add('validation-input');

const x = event => {
  inputRef.classList.remove('validation-input');
  inputRef.classList.add('valid');
  if (event.target.value.length > inputRef.dataset.length) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
};
inputRef.addEventListener('focus', x);
inputRef.addEventListener('blur', x);
