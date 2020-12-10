
const age = 18;
const new_age = 21;

// the strict equality operator '===' compares two values for equality 
// neither value is implicitly converted to some other value before being compared 
// if the values have different types, the values are considered unequal 
if (age === 18) {
    console.log("You can start driving");
}
// the strict inequality operator '!==' compares two values for inequality
if (new_age !== 18) {
    console.log("Maybe you can start driving now");
}