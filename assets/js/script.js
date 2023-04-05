var userZipCode;
var chosenFoodGenre;

var restaurantMap = document.getElementById("restaurant-map");
var zipCodeText = document.getElementById("zipcode");
var foodGenreText = document.getElementById("foodGenre");
var movieGenreText = document.getElementById("movieGenre");
var submitButton = document.getElementById("submit");
var zipCodeModal = document.getElementById("zipCodeModal");

function init(){
    //pull items from local storage
    var storedMovieGenre = JSON.parse(localStorage.getItem("movieGenre"));
    var storedFoodGenre = JSON.parse(localStorage.getItem("foodGenre"));
    var storedZipCode = JSON.parse(localStorage.getItem("zipcode"));

    //checks if there are values pull from local storage, if so, fill in the form with it
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


function validateZipCode() {
    if (zipCodeText.value.length < 5 || zipCodeText.value.length > 5) {
        zipCodeModal.classList.add('is-active');
        zipCodeText.value = '';
    }
}

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





//submitButton.addEventListener("submit", generateRestaurantMap)

function submitPreferences(event){
    //prevent page from reloading
    event.preventDefault();
    //store each field into it's own slot in local storage
    localStorage.setItem("movieGenre", JSON.stringify(movieGenreText.value));
    localStorage.setItem("foodGenre", JSON.stringify(foodGenreText.value));
    localStorage.setItem("zipcode", JSON.stringify(zipCodeText.value));
    //generate the restaurant map
    generateRestaurantMap();
    validateZipCode();
}

submitButton.addEventListener("click", submitPreferences);

init();
