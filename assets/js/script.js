var userZipCode;
var chosenFoodGenre;

var restaurantMap = document.getElementById("restaurant-map");
var zipCodeText = document.getElementById("zipcode");
var foodGenreText = document.getElementById("foodGenre");
var movieGenreText = document.getElementById("movieGenre");
var submitButton = document.getElementById("submit");

function init(){
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
}

//on click/ submit event
function generateRestaurantMap(){
    //if on a submit event, stop the page from reloading
    // event.PreventDefault();

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

function storePreferences(event){
    event.preventDefault();
    localStorage.setItem("movieGenre", JSON.stringify(movieGenreText.value));
    localStorage.setItem("foodGenre", JSON.stringify(foodGenreText.value));
    localStorage.setItem("zipcode", JSON.stringify(zipCodeText.value));
}

submitButton.addEventListener("submit", storePreferences);
