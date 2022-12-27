var main = function (input) {
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

//Km to Miles Exercise
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};
