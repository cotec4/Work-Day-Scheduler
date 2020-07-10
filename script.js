var date = new Date(),
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    dayOfWeek = weekday[date.getDay()],
    domEnder = function () { var a = date; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    dayOfMonth = today + (date.getDate() < 10) ? '0' + date.getDate() + domEnder : date.getDate() + domEnder,
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
    curMonth = months[date.getMonth()],
    today = dayOfWeek + "," + " " + curMonth + " " + dayOfMonth;
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = today;