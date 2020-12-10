
const day = "tuesday";

// switch statement
// it executes a block of code depending on different cases
// the switch statement evaluates an expression and the value of the expression is then compared with the values of each case 
// if there is a match, the associated block of code is executed.
// the 'break' keyword breaks out of the switch block
// if 'break' is omitted, the next code block in the switch statement is executed
// the default keyword specifies some code to run if there is no case match
switch(day) {
    case "monday":
        console.log("This is the first day of the week");
        break;
    case "tuesday":
        console.log("This is only the second day");
        break;
    case "wednesday":
        console.log("We are halfway through");
        break;
    default:
        console.log("What day is this");
}