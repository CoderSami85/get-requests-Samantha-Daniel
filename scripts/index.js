// generator function

const generatePictureHTML = function (arr) {
  const pictures = arr.map(function (el) {
    return `
    <div class=img>
      <img src="${el}" alt="dog picture">
    </div>
    `;
  }).join('');

  return pictures;
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