var currentDay = document.getElementById("currentDay");

var row1 = document.getElementById("9");
var row2 = document.getElementById("10");
var row3 = document.getElementById("11");
var row4 = document.getElementById("12");
var row5 = document.getElementById("13");
var row6 = document.getElementById("14");
var row7 = document.getElementById("15");
var row8 = document.getElementById("16");
var row9 = document.getElementById("17");
var rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9];

// Get Current Date as well as hour to input time and date and to use hours on changing textarea class
var date = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[date.getDay()],
    domEnder = function () { var a = date; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + (date.getDate() < 10) ? '0' + date.getDate() + domEnder : date.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[date.getMonth()],
    curHour = date.getHours(),
    today = dayOfWeek + "," + " " + curMonth + " " + dayOfMonth;
currentDay.innerHTML = today;

console.log(row9.classList);

function changeClass() {
    for (var i = 0; i <rows.length; i++) {
        if (curHour === parseInt(rows[i].id)) {
            rows[i].classList.add("present");
        }
        else if (curHour < parseInt(rows[i].id)) {
            rows[i].classList.add("future");
        }
        else if (curHour > parseInt(rows[i].id)) {
            rows[i].classList.add("past");
        }
    }
}
changeClass();