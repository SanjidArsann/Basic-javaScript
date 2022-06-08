function mileToKm(miles) {
    var kiloMeter = miles * 1.609344;
    return kiloMeter;
}

var distanceOfDhakaInMiles = 85;
var distanceOfDhakaInKm = mileToKm(distanceOfDhakaInMiles);
console.log(distanceOfDhakaInKm);