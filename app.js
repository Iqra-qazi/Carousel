var cakes = [
  "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_chocolate_cake_31070_16x9.jpg",
  "https://images.getrecipekit.com/20250520143332-coffee-20and-20walnut-20cake-20recipe-20uk.png",
  "https://www.foodandwine.com/thmb/d894lH2RTu6tJoR0N78hSkXXy2g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/maria-cookies-icebox-cake-FT-RECIPE0521-4089012694154e40a90e368863e4fa08.jpg"
];

var index = 0;
var cake = document.getElementById("cake");

function next(){
    if(index == cakes.length - 1){
        index = 0;
    } else {
        index++;
    }
    cake.src = cakes[index];
}

function previous(){
    if(index == 0){
        index = cakes.length - 1;
    } else {
        index--;
    }
    cake.src = cakes[index];
}