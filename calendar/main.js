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

        if (today.getFullYear() === date.getFullYear()) {
            if (today.getMonth() === date.getMonth()) {
                if (today.getDate() === date.getDate()) {
                    todaysDate = date.getDate();
                }
            }
        }

        // todo dont change global values
        year = date.getFullYear();
        month = date.getMonth();
        var firstDayOfMonth = new Date(year, month, 1);
        var lastDayOfMonth = new Date(year, month + 1, 0);
        var lastDayOfYear = new Date(year + 1, 0, 0); // example for reference only
        var firstDayOfYear = new Date(year, 0, 1); // example for reference only

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

    //grid 42 (6 rows of 7 days each)
    function getFullGrid(date) {
        var prevMonth = getPrevMonth(date);
        var currMonth = getDaysOfTheMonth(date);
        var nextMonth = getNextMonth(date);
        var currMonthFirstWeekDay = currMonth[0].weekDay;
        var currMonthLastWeekDay = currMonth[currMonth.length - 1].weekDay;
        prevMonth = prevMonth.slice((prevMonth.length) - currMonthFirstWeekDay);
        nextMonth = nextMonth.slice(0, 13 - currMonthLastWeekDay);
        var grid = prevMonth.concat(currMonth, nextMonth);
        grid = grid.slice(0, 42);

        return grid;
    }

    function formatDate(date) {
        var date = date;
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        month = (month < 10) ? "0"+month.toString() : month.toString();
        day = (day < 10) ? "0"+day.toString() : day.toString();

        return year.toString() +"-"+ month +"-"+ day;
    }

    function calendarGen(date) {
        var calendar = "";

        calendar += "<input type='hidden' name='date_picker' id='date_picker' value='' >"
        calendar += "<div id='calendar_container'>";
        calendar += "<div>";
            calendar += "<div id='calendar_heading'>";
            calendar += "<div id='previous' data-previous_month='"+(new Date(date.getFullYear(), date.getMonth() - 1).toDateString())+"'><</div>";
            calendar +=  "<div id='month_year'>"+months[date.getMonth()].name + " " + date.getFullYear()+"</div>";
            calendar += "<div id='next' data-next_month='"+(new Date(date.getFullYear(), date.getMonth() + 1).toDateString())+"'>></div>";
            calendar += "</div>";
        calendar += "</div>";
        calendar += "<table>";
        // generate calendar day names row
        var day;
        var dayNamesRow = "<thead><tr>";
        for (day in weekDays) {
            if (!weekDays.hasOwnProperty(day))
                continue;

            dayNamesRow += "<th>"+weekDays[day].abbreviation+"</th>";
        }
        dayNamesRow += "</tr></thead>";
        calendar += dayNamesRow;


        //var daysOfTheMonth = getDaysOfTheMonth(date);
        var daysOfTheMonth = getFullGrid(date);

        //console.log(daysOfTheMonth);
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

            var onClickDate = new Date(date.getFullYear(), date.getMonth(), daysOfTheMonth[index].day);
            if (daysOfTheMonth[index].today === true) {
                row += "<td class='today this_month' data-date='"+ formatDate(onClickDate) +"' >";
            } else if (daysOfTheMonth[index].currMonth === false) {
                row += "<td class='not_this_month'>";
            } else {
                row += "<td class='this_month' data-date='"+ formatDate(onClickDate) +"' >";
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
        calendar += "</table>";
        calendar += "</div>";

        document.getElementById("calendar").innerHTML = calendar;

        var activeDates = document.getElementsByClassName("this_month");
        for (var a = 0; a < activeDates.length; a++) {
            activeDates[a].addEventListener("click", function () {
                console.log(this.dataset.date);
                document.getElementById("date_picker").value = this.dataset.date;
            });
        }

        var prevButton = document.getElementById("previous");
        prevButton.addEventListener("click", function (event) {
            console.log(prevButton.dataset.previous_month);
            calendarGen(new Date(prevButton.dataset.previous_month));
        });

        var nextButton = document.getElementById("next");
        nextButton.addEventListener("click", function (event) {
            console.log(nextButton.dataset.next_month);
            calendarGen(new Date(nextButton.dataset.next_month));
        });
    }

    var date = new Date();
    calendarGen(date);



};