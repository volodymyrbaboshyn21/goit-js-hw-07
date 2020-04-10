const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const linkRef = document.getElementById('gallery');
console.log(linkRef);

const caseList = images.forEach(element => {
//   const listRef = document.createElement('li');
  const imgRef = document.createElement('img');
  imgRef.alt = element.alt;
  imgRef.src = element.url;
//   linkRef.append(listRef);
//   listRef.append(imgRef);
  linkRef.insertAdjacentHTML('afterbegin', `<li><img src="${element.url}" alt="${element.alt}"></li>`);
});
