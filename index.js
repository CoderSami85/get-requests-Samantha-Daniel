'use strict';

// generator function

const generatePictureHTML = function (dog) {
  console.log(dog);
  const img = dog.message;
  $('main').html(`<img src="${img}" alt="dogpics">`);
};


// event listener functions

const handleNumberSubmit = function () {
  $('#number-form').submit(function (event) {
    event.preventDefault();
    const number = $('.js-pictures').val();
    sendToAPI(number);
  });
};


const sendToAPI = function (name) {
  fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then(response => response.json())
    .then(img => generatePictureHTML(img))
    .catch(err => console.log(err));
};

// callbacks

const handleDogList = function () {
  handleNumberSubmit();
};

// load
$(handleDogList);