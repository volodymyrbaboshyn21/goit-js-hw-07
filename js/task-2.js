const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const linkRef = document.getElementById('ingredients');
console.log(linkRef);

const caseList = ingredients.forEach(element => {
  const listRef = document.createElement('li');
  listRef.textContent = element;
  linkRef.append(listRef);
});
