var currentDay = document.getElementById("currentDay");

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

// Create for loop for creating divs for each time block

function createTimeBlock() {
    for (var i = 1; i < 25; i++) {
        var parentDiv = $("<div>").addClass("row");
        var timeDiv = $("<div>").addClass("col-md-1 hour time-block");
        var timeP = $("<p>").attr("id", "time" + i).text(function () {
            if (i < 12) {
                return i + "AM";
            }
            else if (i === 12) {
                return i + "PM";
            }
            else if (i > 12) {
                return i - 12 + "PM";
            }
        });
        var textArea = $("<textarea>").addClass("col-md-10").attr("type", "text").attr("id", i);
        var button = $("<button>").addClass("col-md-1 saveBtn").attr("type", "submit");
        var buttonI = $("<i>").addClass("far fa-save");
        timeDiv.append(timeP);
        button.append(buttonI);
        parentDiv.append(timeDiv, textArea, button);
        $(".container").append(parentDiv);
    }
}

// Call the function to create the timeblocks
createTimeBlock();

// Function to change the class (and therefore formatting) for each Timeblock
function changeClass() {
    for (var i = 1; i < 25; i++) {
        if (curHour === i) {
            $("#" + i).addClass("present");
        }
        else if (curHour < i) {
            $("#" + i).addClass("future");
        }
        else if (curHour > i) {
            $("#" + i).addClass("past");
        }
        if (curHour !== i && i < 9) {
            $("#" + i).parent().addClass("d-none");
        }
        if (curHour !== i && i > 17) {
            $("#" + i).parent().addClass("d-none");
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
for (var i = 1; i < 25; i++) {
    $("#" + i).text(localStorage.getItem($("#" + i).parent().children()[0].textContent));
}


// Call the function to ensure timeblocks are changing classes / colors
changeClass();

// On Click of save move data to local storage
$(document).on("click", ".saveBtn", saveData);