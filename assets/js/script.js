var userZipCode;
var chosenFoodGenre;

var restaurantMap = document.getElementById("restaurant-map");
var zipCodeText = document.getElementById("zipcode");

var foodGenreText = document.getElementById("foodGenre");
var movieGenreText = document.getElementById("movieGenre");
var submitButton = document.getElementById("submit");

function init(){
    //pull user preferences from local storage
    var storedMovieGenre = JSON.parse(localStorage.getItem("movieGenre"));
    var storedFoodGenre = JSON.parse(localStorage.getItem("foodGenre"));
    var storedZipCode = JSON.parse(localStorage.getItem("zipcode"));

    //check if there is data stored in each, if there is, it updates the input field to the saved value
    if (storedMovieGenre !== null){
        movieGenreText.value = storedMovieGenre;
    }

    if (storedFoodGenre !== null){
        foodGenreText.value = storedFoodGenre;
    }

    if (storedZipCode !== null){
        zipCodeText.value = storedZipCode;
    }

    //updates the restaurant map with previous selections on load
    generateRestaurantMap();
}


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

//run on load
init();
