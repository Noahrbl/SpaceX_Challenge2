setInterval(displayDate, displayClock, 1000);

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

displayDate(), displayClock();