'use strict';

// generator function

const generatePictureHTML = function (arr) {
  let dogPics= [];
  arr.message.forEach(event=>{
    dogPics.push(`<img src="${event}" alt="dogpics">`);
  });
  dogPics = dogPics.join('');
  return dogPics;
};

// render function
function renderPictures() {
  $('main').html(generatePictureHTML());
}

// event listener functions

const handleNumberSubmit = function () {
  $('#number-form').submit(function (event) {
    event.preventDefault();
    const number = $('.js-pictures').val();
    sendToAPI(number);
    renderPictures();
  });
};


const sendToAPI = function (number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(dogs => generatePictureHTML(dogs))
    .catch(err => console.log(err));
};

// callbacks

const handleDogList = function () {
  renderPictures();
  handleNumberSubmit();
};

// load
$(handleDogList);