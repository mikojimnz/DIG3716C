function run() {
    "use strict";

    var running = true;
    var input;
    var converted;

    function menu() {
        var menuSelect = prompt('Enter 1, 2, 3, or \"Exit\"');

        switch (menuSelect) {
            case "1":
                input = program1();
                break;
            case "2":
                converted = program2(input);
                break;
            case "3":
                if (program3(converted)) {
                    input = null;
                    converted = null;
                }
                break;
            case "Exit":
                running = exit();
                break;
            default:
                menu();
        }
    }

    function program1() {
        var input = '';

        while (input.length == 0) {
            input = prompt("Enter a string")
            if (input.length == 0) console.error("You need to enter something!");
        }

        return input;

    }

    function program2(input) {

        if (input == null || input.length == 0) {
            console.error("You need to enter a String first!");
            return null;
        }

        var words = input.split(' ');
        var newString = '';

        words.forEach(function (i) {
            newString += (i + ((i.length < 5) ? "-boink" : "-bork") + " ");
        });

        console.log("String Converted");
        return newString.trim();
    }

    function program3(converted) {
        if (converted == null) {
            console.error("You need to first convert your String");
            return false;
        }

        console.log(converted);
        return true
    }

    function exit() {
        console.log("Thanks for using the ROBOT Language Converter!");
        return false;
    }

    while (running) {
        menu();
    }

}

run();
