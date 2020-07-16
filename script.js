var currentDay = document.getElementById("currentDay");

var time1 = document.getElementById("time1"),
    time2 = document.getElementById("time2"),
    time3 = document.getElementById("time3"),
    time4 = document.getElementById("time4"),
    time5 = document.getElementById("time5"),
    time6 = document.getElementById("time6"),
    time7 = document.getElementById("time7"),
    time8 = document.getElementById("time8"),
    time9 = document.getElementById("time9"),
    time10 = document.getElementById("time10"),
    time11 = document.getElementById("time11"),
    time12 = document.getElementById("time12"),
    time13 = document.getElementById("time13"),
    time14 = document.getElementById("time14"),
    time15 = document.getElementById("time15"),
    time16 = document.getElementById("time16"),
    time17 = document.getElementById("time17"),
    time18 = document.getElementById("time18"),
    time19 = document.getElementById("time19"),
    time20 = document.getElementById("time20"),
    time21 = document.getElementById("time21"),
    time22 = document.getElementById("time22"),
    time23 = document.getElementById("time23"),
    time24 = document.getElementById("time24");
var times = [time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12, time13, time14, time15, time16, time17, time18, time19, time20, time21, time22, time23,time24];

var row1 = document.getElementById("1"),
    row2 = document.getElementById("2"),
    row3 = document.getElementById("3"),
    row4 = document.getElementById("4"),
    row5 = document.getElementById("5"),
    row6 = document.getElementById("6"),
    row7 = document.getElementById("7"),
    row8 = document.getElementById("8"),
    row9 = document.getElementById("9"),
    row10 = document.getElementById("10"),
    row11 = document.getElementById("11"),
    row12 = document.getElementById("12"),
    row13 = document.getElementById("13"),
    row14 = document.getElementById("14"),
    row15 = document.getElementById("15"),
    row16 = document.getElementById("16"),
    row17 = document.getElementById("17"),
    row18 = document.getElementById("18"),
    row19 = document.getElementById("19"),
    row20 = document.getElementById("20"),
    row21 = document.getElementById("21"),
    row22 = document.getElementById("22"),
    row23 = document.getElementById("23"),
    row24 = document.getElementById("24");
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

// Call the function to ensure timeblocks are changing classes / colors
changeClass();

// On Click of save move data to local storage
$(document).on("click", ".saveBtn", saveData);