// generator function

// const generatePictureHTML = function () {
//   return ``;
// };

// render function

// event listener functions

const handleNumberSubmit = function () {
  $('#number-form').submit(function (event) {
    event.preventDefault();
    const number = $('.js-pictures').val();
    sendToAPI(number);
    //render();
  });
};


const sendToAPI = function (number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(dogs => console.log(dogs))
    .catch(err => console.log(err));
};

// callbacks

const handleDogList = function () {
  //render();
  handleNumberSubmit();
};

// load
$(handleDogList);