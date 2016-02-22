window.onload = function () {

    var months = [
        {name: "january", days: 31},
        {name: "february", days: 28},
        {name: "march", days: 31},
        {name: "april", days: 30},
        {name: "may", days: 31},
        {name: "june", days: 30},
        {name: "july", days: 31},
        {name: "august", days: 31},
        {name: "september", days: 30},
        {name: "october", days: 31},
        {name: "november", days: 30},
        {name: "december", days: 31},
    ];

    var weekDays = [
        {name: "sunday", abbreviation: "sun"},
        {name: "monday", abbreviation: "mon"},
        {name: "tuesday", abbreviation: "tue"},
        {name: "wednesday", abbreviation: "wed"},
        {name: "thursday", abbreviation: "thu"},
        {name: "friday", abbreviation: "fri"},
        {name: "saturday", abbreviation: "sat"},
    ];

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var dayOfWeek = today.getDay();
    var dayOfMonth = today.getDate();


    function getDaysOfTheMonth(date, currMonth) {

        if (currMonth !== false) {
            currMonth = true;
        }
        var today = new Date();
        var todaysDate = false;

        //
        if (today.getFullYear() === date.getFullYear()) {
            if (today.getMonth() === date.getMonth()) {
                if (today.getDate() === date.getDate()) {
                    todaysDate = date.getDate();
                }
            }

        }

        year = date.getFullYear();
        month = date.getMonth();
        var firstDayOfMonth = new Date(year, month, 1);
        var lastDayOfMonth = new Date(year, month + 1, 0);
        var lastDayOfYear = new Date(year + 1, 0, 0);
        var firstDayOfYear = new Date(year, 0, 1);

        var days = [];
        var dayOfMonth = firstDayOfMonth.getDate();
        var dayOfWeek = firstDayOfMonth.getDay();

        while (dayOfMonth <= lastDayOfMonth.getDate()) {
            days.push({
                day:dayOfMonth,
                weekDay: dayOfWeek,
                name: weekDays[dayOfWeek].name,
                today:(dayOfMonth === todaysDate),
                currMonth: currMonth
            });
            dayOfWeek = (dayOfWeek === 6) ? 0 : (dayOfWeek + 1);
            dayOfMonth++;
        }

        return days;
    }

    function getPrevMonth(date) {

        var d = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        return getDaysOfTheMonth(d, false);
    }

    function getNextMonth(date) {
        var date = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
        return getDaysOfTheMonth(date, false);
    }

    function getFullGrid(date) {

        //grid 42 (6 rows of 7 days each)
        var prevMonth = getPrevMonth(date);


        var currMonth = getDaysOfTheMonth(date);
        var currMonthFirstWeekDay = currMonth[0].weekDay;
        var currMonthLastWeekDay = currMonth[currMonth.length - 1].weekDay;

        prevMonth = prevMonth.slice((prevMonth.length) - currMonthFirstWeekDay);
        console.log("prevMonth: ",prevMonth);
        var nextMonth = getNextMonth(date);
        nextMonth = nextMonth.slice(0, 13 - currMonthLastWeekDay);
        var grid = prevMonth.concat(currMonth, nextMonth);
        grid = grid.slice(0, 42)
        console.log("grid : ", grid);
        console.log(prevMonth.slice(-currMonthFirstWeekDay));

        return grid;
    }

    var daate = new Date(2016, 7);
    var calendar = "";
    calendar += "<div>"+ months[daate.getMonth()].name + " " + daate.getFullYear() +"</div>"
    calendar += "<table border='1px solid black'>";
    // generate calendar day names row
    var day;
    var dayNamesRow = "<thead><tr>";
    for (day in weekDays) {
        if (!weekDays.hasOwnProperty(day))
            continue;

        dayNamesRow += "<td>"+weekDays[day].abbreviation+"</td>";
    }
    dayNamesRow += "</tr></thead>";
    calendar += dayNamesRow;


    //var daysOfTheMonth = getDaysOfTheMonth(daate);
    var daysOfTheMonth = getFullGrid(daate);

    console.log(daysOfTheMonth);
    var firstDayOfTheMonth = "not_set";
    var row = "<tbody>";
    var wdi = 0;
    var index;
    for (index in daysOfTheMonth) {
        if (!daysOfTheMonth.hasOwnProperty(index)) {
            continue;
        }

        if (wdi === 0) {
            row += "<tr>";
        }
        if (firstDayOfTheMonth === "not_set") {
            firstDayOfTheMonth = daysOfTheMonth[index].weekDay;
        }

        // if is int
        /*if (!isNaN(parseInt(firstDayOfTheMonth))) {
            wdi = firstDayOfTheMonth;
            for (var e = 0; e < firstDayOfTheMonth; e++) {
                row += "<td></td>";
            }
        }*/

        if (daysOfTheMonth[index].today === true) {
            row += "<td style='color: blue; font-weight: bold;'>";
        } else if (daysOfTheMonth[index].currMonth === false) {
            row += "<td style='color: grey;'>";
        } else {
            row += "<td>";
        }
        row += daysOfTheMonth[index].day+"</td>";

        if (wdi === 6) {
            row += "</tr>";
        }
        firstDayOfTheMonth = "done";
        wdi = (wdi === 6) ? 0 : (wdi + 1);
    }

    row += "<tbody>";

    calendar += row;
    document.getElementById("calendar").innerHTML = calendar;

};