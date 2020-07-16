var currentDay = document.getElementById("currentDay");

var time1 = document.getElementById("time1");
var time2 = document.getElementById("time2");
var time3 = document.getElementById("time3");
var time4 = document.getElementById("time4");
var time5 = document.getElementById("time5");
var time6 = document.getElementById("time6");
var time7 = document.getElementById("time7");
var time8 = document.getElementById("time8");
var time9 = document.getElementById("time9");
var time10 = document.getElementById("time10");
var time11 = document.getElementById("time11");
var time12 = document.getElementById("time12");
var time13 = document.getElementById("time13");
var time14 = document.getElementById("time14");
var time15 = document.getElementById("time15");
var time16 = document.getElementById("time16");
var time17 = document.getElementById("time17");
var time18 = document.getElementById("time18");
var time19 = document.getElementById("time19");
var time20 = document.getElementById("time20");
var time21 = document.getElementById("time21");
var time22 = document.getElementById("time22");
var time23 = document.getElementById("time23");
var time24 = document.getElementById("time24");
var times = [time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12, time13, time14, time15, time16, time17, time18, time19, time20, time21, time22, time23,time24];

var row1 = document.getElementById("1");
var row2 = document.getElementById("2");
var row3 = document.getElementById("3");
var row4 = document.getElementById("4");
var row5 = document.getElementById("5");
var row6 = document.getElementById("6");
var row7 = document.getElementById("7");
var row8 = document.getElementById("8");
var row9 = document.getElementById("9");
var row10 = document.getElementById("10");
var row11 = document.getElementById("11");
var row12 = document.getElementById("12");
var row13 = document.getElementById("13");
var row14 = document.getElementById("14");
var row15 = document.getElementById("15");
var row16 = document.getElementById("16");
var row17 = document.getElementById("17");
var row18 = document.getElementById("18");
var row19 = document.getElementById("19");
var row20 = document.getElementById("20");
var row21 = document.getElementById("21");
var row22 = document.getElementById("22");
var row23 = document.getElementById("23");
var row24 = document.getElementById("24");
var rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19, row20, row21, row22, row23, row24];

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

// Function to change the class (and therefore formatting) for each Timeblock
function changeClass() {
    for (var i = 0; i < rows.length; i++) {
        if (curHour === parseInt(rows[i].id)) {
            rows[i].classList.add("present");
        }
        else if (curHour < parseInt(rows[i].id)) {
            rows[i].classList.add("future");
        }
        else if (curHour > parseInt(rows[i].id)) {
            rows[i].classList.add("past");
        }
        if (curHour !== parseInt(rows[i].id) && parseInt(rows[i].id) < 9) {
            rows[i].parentNode.classList.add("d-none");
        }
        if (curHour !== parseInt(rows[i].id) && parseInt(rows[i].id) > 17) {
            rows[i].parentNode.classList.add("d-none");
        }
    }
}
changeClass();

// Save the Data to local storage
function saveData(event) {

    var placeToSave = $(this).parent().children()[1];
    var textToSave = $(this).parent().children()[1].value;
    var keyToSave = $(this).parent().children()[0].textContent;

    if (textToSave !== "") {
        localStorage.setItem(keyToSave, textToSave);
        placeToSave.innerHTML = textToSave;
    }
}

// Ensure the Saved Data stays on the page even when refreshed
for (var i = 0; i < times.length; i++) {
    $(rows[i]).text(localStorage.getItem(times[i].textContent));
}

// On Click of save move data to local storage
$(document).on("click", ".saveBtn", saveData);