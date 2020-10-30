/* eslint-env browser */

window.addEventListener('load', function () {
    "use strict";

    var images = ["./images/flying-car-593.jpg", "./images/flying-car-m400.jpg", "./images/flyingCar-article.jpg", "./images/high-road-aerocar.jpg", "./images/log200711a.jpg", "./images/saucercarSplash_450x325.jpg"];

    function show(img) {
        document.getElementById("img").src = images[img - 1];
        document.getElementById("img").style.display = "block";
        document.getElementById("init").style.display = "none";
    }

    document.getElementById("1").addEventListener("click", function () {
        show(1);
    }, false);
    document.getElementById("2").addEventListener("click", function () {
        show(2);
    }, false);
    document.getElementById("3").addEventListener("click", function () {
        show(3);
    }, false);
    document.getElementById("4").addEventListener("click", function () {
        show(4);
    }, false);
    document.getElementById("5").addEventListener("click", function () {
        show(5);
    }, false);
    document.getElementById("6").addEventListener("click", function () {
        show(6);
    }, false);
});
