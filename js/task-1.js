const tagRef = document.querySelectorAll('#categories>li.item');

const titleRef = tagRef.forEach(element => {
  const title = element.querySelector('h2').textContent;
  const itemsLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title}`);
  console.log(`Количество элементов: ${itemsLength}`);
});
