var userZipCode;
var chosenFoodGenre;
var chosenMovieGenre;

var movieTitle = document.getElementById("movie-title")

var restaurantMap = document.getElementById("restaurant-map");
var zipCodeText = document.getElementById("zipcode");

var foodGenreText = document.getElementById("foodGenre");
var movieGenreText = document.getElementById("movieGenre");
var submitButton = document.getElementById("submit");
var zipcodemodal = document.getElementById("zipcodemodal");

function init(){
    //pull items from local strage
    var storedMovieGenre = JSON.parse(localStorage.getItem("movieGenre"));
    var storedFoodGenre = JSON.parse(localStorage.getItem("foodGenre"));
    var storedZipCode = JSON.parse(localStorage.getItem("zipcode"));

    if (storedMovieGenre !== null){
        movieGenreText.value = storedMovieGenre;
    }

    if (storedFoodGenre !== null){
        foodGenreText.value = storedFoodGenre;
    }

    if (storedZipCode !== null){
        zipCodeText.value = storedZipCode;
    }
    //generate restaurant map
    generateRestaurantMap();
}


document.getElementById('submit').addEventListener('click', (event) => {
  if (zipCodeText.value === '') {
    event.preventDefault();
    zipCodeModal.classList.add('is-active');
  }
});

document.querySelector('.modal-close').addEventListener('click', () => {
  zipCodeModal.classList.remove('is-active');
});


function generateRestaurantMap(){

    //take user zipcode and cuisine selections
    userZipCode = zipCodeText.value;
    chosenFoodGenre = foodGenreText.value;

    //generate the API link
    var mapLink = 
    "https://www.google.com/maps/embed/v1/search?key=AIzaSyCH6SpD7Rqx4pD0Y7ZsOK8h1wkkIbV8Ptg&q=" 
    + chosenFoodGenre + "+restaurants+near+" + userZipCode;
    //add the link to the src attribute on the HTML page
    restaurantMap.setAttribute("src", mapLink);

}

function generateMovieChoices(){

  chosenMovieGenre = movieGenre.value;

  var movieLink = "https://api.themoviedb.org/3/discover/movie?api_key=9382d0b84dae3b5b2a9af9c9b2ba057e&with_genres=" + chosenMovieGenre;

   fetch(movieLink)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i].title)
      movieTitle.textContent = data.results[i].title;
    }
  });
}
 submitButton.addEventListener("click", generateMovieChoices);




//submitButton.addEventListener("submit", generateRestaurantMap)

function storePreferences(event){
    //prevent page from reloading
    event.preventDefault();
    //store each field into it's own slot in local storage
    localStorage.setItem("movieGenre", JSON.stringify(movieGenreText.value));
    localStorage.setItem("foodGenre", JSON.stringify(foodGenreText.value));
    localStorage.setItem("zipcode", JSON.stringify(zipCodeText.value));
    //generate the restaurant map
    generateRestaurantMap();
}

submitButton.addEventListener("click", storePreferences);

init();

//