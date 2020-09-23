function indvPracticeOne() {
    "use strict";

    var strInput = prompt("Please enter 1, 2 or 3");
    var intInput = parseInt(strInput);

    switch (intInput) {
        case 1:
            alert("You entered 1!");
            break;
        case 2:
            alert("You entered a 2!");
            break;
        case 3:
            alert("You entered a 3!");
            break;
        default:
            alert("I said a number between 1 and 3!!");
            break;
    }
}

function groupPracticeOne() {
    var name = prompt("What is your name?");
    var age = prompt("What is your age?");
    var feeling = prompt("How are you feeling today?");

    if (name === '' || (age === '') || feeling === '') {
        alert("You did not answer one of the questions. Please Reload the page.");
        return;
    }

    switch (feeling.toLowerCase()) {
        case "happy":
        case "excited":
        case "amazing":
        case "good":
            feeling = "great";
            break;
        case "sad":
        case "tired":
        case "ok":
            feeling = "ok";
            break;
        case "mad":
        case "angry":
        case "bad":
            feeling = "not ok";
            break;
        default:
            feeling = "something";
            break;
    }

    alert("Hello " + name + "! You are " + age + " and feeling " + feeling + " today.");
}

function indvPracticeTwo() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }

    var j = 1;
    while (j <= 5) {
        console.log(j);
        j++;
    }

    var k = 0;
    do {
        k++;
        console.log(k);
    } while (k < 5);
}

function groupPracticeTwo() {
    var randInt = Math.floor(Math.random() * Math.floor(25)) + 1;
    console.log(randInt);
    var guessed = -1;

    while (guessed != randInt) {
        if (guessed == -1) {
            guessed = prompt("Pick a number between 1 and 25");
        } else {
            console.log("User choose " + guessed);
            guessed = prompt("Wrong! " + guessed + " was not the number. Pick another number between 1 and 25");
        }
    }

    alert("Correct! The number was " + randInt);
}

function indvPracticeThree() {
    var input = prompt("Enter a string").trim();
    var output = '';

    for (var i = input.length - 1; i >= 0; i--) {
        console.log(input[i]);
        output += input[i];
    }

    alert(output.toLowerCase());
}

function groupPracticeThree() {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var input = prompt("Enter a string");
    var vowelCnt = 0;
    var constCnt = 0;

    for (var i = 0; i < input.length; i++) {
        if (!input[i].match(/[a-z]+/gi)) continue;

        if (vowels.includes(input[i].toLowerCase())) {
            vowelCnt++;
        } else {
            constCnt++;
        }
    }

    alert("Vowels: " + vowelCnt + " Consonants: " + constCnt);
}

/*
 Comment to turn on and off
*/

indvPracticeOne();
groupPracticeOne();

indvPracticeTwo();
groupPracticeTwo();

indvPracticeThree();
groupPracticeThree();
