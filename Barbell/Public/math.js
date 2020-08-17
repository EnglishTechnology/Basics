// automatically hide list, define show/hide variables
// not sure if this is the most optimal
var fortyFiveList = document.getElementById("fortyFiveList");
fortyFiveList.style.display = "none";
var thirtyFiveList = document.getElementById("thirtyFiveList");
thirtyFiveList.style.display = "none";
var twentyFiveList = document.getElementById("twentyFiveList");
twentyFiveList.style.display = "none";
var tenList = document.getElementById("tenList");
tenList.style.display = "none";
var fiveList = document.getElementById("fiveList");
fiveList.style.display = "none";
var twoHalfList = document.getElementById("twoHalfList");
twoHalfList.style.display = "none";
//hide (on each side)
var onEach = document.getElementById("onEach");
onEach.style.display = "none"

function calcBarbell(){
    // get weight, subtract the bar, define variables
    var weight = document.getElementById("weight").value - 45;
    var fortyFive=0, thirtyFive=0, twentyFive=0, ten=0, five=0, twoHalf=0;
    var checkbox = document.getElementById("thirtyFive");

    // calculate plates for each side of the bar, displays if plates exist
    // used while loops, not sure if this is the most optimal
    while (weight >= 90){
        weight = weight - 90;
        fortyFive++;
    }
    while (checkbox.checked == true && weight >= 70){
        weight = weight - 70;
        thirtyFive++;
    }
    while (weight >= 50){
        weight = weight - 50;
        twentyFive++;
    }
    while (weight >= 20){
        weight = weight - 20;
        ten++;
    }
    while (weight >= 10){
        weight = weight - 10;
        five++;
    }
    while (weight >= 5){
        weight = weight - 5;
        twoHalf++;
    }

    // output - displays and un-hides if at least one plate exists, continually hides if not (for multiple inputs)
    if (fortyFive > 0){
        document.getElementById("fortyFiveOutput").innerHTML = fortyFive;
        fortyFiveList.style.display = "block"; 
    } else {
        fortyFiveList.style.display = "none";
    }
    if (thirtyFive > 0){
        document.getElementById("thirtyFiveOutput").innerHTML = thirtyFive;
        thirtyFiveList.style.display = "block"; 
    } else {
        thirtyFiveList.style.display = "none"; 
    }
    if (twentyFive > 0){
        document.getElementById("twentyFiveOutput").innerHTML = twentyFive;
        twentyFiveList.style.display = "block";
    } else {
        twentyFiveList.style.display = "none";
    }
    if (ten > 0){
        document.getElementById("tenOutput").innerHTML = ten;
        tenList.style.display = "block";
    } else {
        tenList.style.display = "none";
    }
    if (five > 0){
        document.getElementById("fiveOutput").innerHTML = five;
        fiveList.style.display = "block";
    } else {
        fiveList.style.display = "none";
    }
    if (twoHalf > 0){
        document.getElementById("twoHalfOutput").innerHTML = twoHalf;
        twoHalfList.style.display = "block";
    } else {
        twoHalfList.style.display = "none";
    }
    //display (on each side) if function is called
    onEach.style.display = "flex"
}

// Validation
function validateWeight() {
    var x = document.forms["form"]["inputBarbell"].value;
    if (x % 5 !== 0 && x < 50) { // both too light and not a multiple of 5
        alert("A minimum weight of 50lbs is required for a barbell and some plates, and weight must be in multiples of 5, as the lightest plates to load on each side are 2.5lbs");
        return false;
    } else if (x % 5 !== 0) { // not a multiple of 5
        alert("Weight must be in multiples of 5, as the lightest plates to load on each side are 2.5lbs");
        return false;
    } else if (x < 50) { // too light
        alert("A minimum weight of 50lbs is required for a barbell and some plates");
        return false;
    } else { //call function
        event.preventDefault()
        calcBarbell();
    }
}