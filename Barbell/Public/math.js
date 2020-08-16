function calcBarbell(){
    // get weight, subtract the bar, define variables
    var weight = document.getElementById("weight").value - 45;
    var fortyFive=0, thirtyFive=0, twentyFive=0, ten=0, five=0, twoHalf=0;
    // calculate plates to add to each side
    while (weight >= 90){   weight = weight - 90;   fortyFive++;}
    while (weight >= 70){   weight = weight - 70;   thirtyFive++;}
    while (weight >= 50){   weight = weight - 50;   twentyFive++;}
    while (weight >= 20){   weight = weight - 20;   ten++;}
    while (weight >= 10){   weight = weight - 10;   five++;}
    while (weight >= 5){    weight = weight - 5;    twoHalf++;}
    // output
    document.getElementById("fortyFiveOutput").innerHTML = fortyFive;
    document.getElementById("thirtyFiveOutput").innerHTML = thirtyFive;
    document.getElementById("twentyFiveOutput").innerHTML = twentyFive;
    document.getElementById("tenOutput").innerHTML = ten;
    document.getElementById("fiveOutput").innerHTML = five;
    document.getElementById("twoHalfOutput").innerHTML = twoHalf;
}

// Validation
function validateWeight() {
    var x = document.forms["form"]["inputBarbell"].value;
    if (x % 5 !== 0 && x < 50) {
        alert("A minimum weight of 50lbs is required for a barbell and some plates, and weight must be in multiples of 5, as the lightest plates to load on each side are 2.5lbs");
        return false;
    } else if (x % 5 !== 0) {
        alert("Weight must be in multiples of 5, as the lightest plates to load on each side are 2.5lbs");
        return false;
    } else if (x < 50) {
        alert("A minimum weight of 50lbs is required for a barbell and some plates");
        return false;
    } else {
        event.preventDefault()
        calcBarbell();
    }
}