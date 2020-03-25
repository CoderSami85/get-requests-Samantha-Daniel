'use strict';

// generator function

const generatePictureHTML = function (arr) {
  console.log(arr);
  let dogPics= [];
  arr.message.forEach(el =>{
    dogPics.push(`<img src="${el}" alt="dogpics">`);
  });
  dogPics = dogPics.join('');
  $('main').html(dogPics);
};


// event listener functions

const handleNumberSubmit = function () {
  $('#number-form').submit(function (event) {
    event.preventDefault();
    const number = $('.js-pictures').val();
    sendToAPI(number);
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
  handleNumberSubmit();
};

// load
$(handleDogList);