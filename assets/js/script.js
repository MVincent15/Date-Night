var userZipCode;
var chosenFoodGenre;

var restaurantMap = document.getElementById("restaurant-map");
var zipCodeText = document.getElementById("zipcode");
var cuisineText = document.getElementById("foodGenre");

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

generateRestaurantMap();


//submitButton.addEventListener("submit", generateRestaurantMap)