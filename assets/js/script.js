var userZipCode = 75052;
var chosenCuisine = "mexican";
var restaurantMap = document.getElementById("restaurant-map");
var zipCodeText = document.getElementById("zipcode");
var cuisineText = document.getElementById("cuisine");

//on click event
function generateRestaurantMap(){
    //if on a submit event, stop the page from reloading
    // event.PreventDefault();
    //take user zipcode and cuisine selections
    // userZipCode = zipCodeText.value;
    // chosenCuisine = cuisineText.value;
    //generate the API link
    var mapLink = 
    "https://www.google.com/maps/embed/v1/search?key=AIzaSyCH6SpD7Rqx4pD0Y7ZsOK8h1wkkIbV8Ptg&q=" 
    + chosenCuisine + "+restaurants+near+" + userZipCode;
    //add the link to the src attribute on the HTML page
    restaurantMap.setAttribute("src", mapLink);

}

generateRestaurantMap();


//submitButton.addEventListener("submit", generateRestaurantMap)