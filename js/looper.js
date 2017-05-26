/*
*   Name: Zeinab AbuSharkh
*   Student Number: 040886942
*   MTM1526 - Letter Looper
*/

/*global alert, console, prompt, document*/
/*jslint eqeq: true*/

//Ask the user for input
var user_input;

// keep asking for use input
while (user_input == undefined || user_input == null || user_input == '') {
    user_input = prompt("Please enter a character");
}


//index pointers variable definition
var i;
var k;
var result = "";

// outer and inner for loops
for (i = 0; i < 10; i += 1) {
    for (k = 0; k < i; k += 1) {
        // print the character i times
        result = result + user_input;
    }
    // print a new line break
    result = result + "<br>";
}

// print to html document
document.querySelector('.results').innerHTML = result;


