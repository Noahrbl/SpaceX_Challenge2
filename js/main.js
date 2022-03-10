setInterval(displayDate, displayClock, 1000);
setInterval(displayImage, 60000);

function displayDate() {

    var today = new Date();

    var months = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

    document.getElementById('date').innerHTML = today.getUTCDate() + ' ' + months[today.getUTCMonth()] + ' ' + today.getUTCFullYear();
}

function displayClock() {

    var today = new Date();

    var hours = today.getUTCHours();
    var minutes = today.getUTCMinutes();
    var seconds = today.getUTCSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds + ' UTC';

}

function displayImage() {

    var today = new Date();

    var image = today.getUTCHours();

    if (image >= 12 && image < 18) {
        document.getElementById('dateImage').src = "images/day.jpg";
    } else if (image >= 6 && image < 12) {
        document.getElementById('dateImage').src = "images/sunset.png";
    } else if (image > 18 && image <= 23) {
        document.getElementById('dateImage').src = "images/sunset.png";
    } else {
        document.getElementById('dateImage').src = "images/night.png";
    }
}

displayDate(), displayClock(), displayImage();