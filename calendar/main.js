window.onload = function () {

    // todo make this a class

    var startDate = "1970-01-01 thursday";
    var year = 365;
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

    function isInt(n) {
        return n % 1 === 0;
    }

    // Check if year is a leap year:
    // criteria 1. if the year is evenly divisible by 4, it is a leap year.
    // criteria 2. if the year is evenly divisible by 100 it is not a leap year unless:
    // criteria 3. the year is also evenly divisible by 400. Then it is a leap year.
    function isLeapYear(year) {
        // criteria 1
        if (isInt(year / 4)) {
            console.log("isLeapYear Criteria 1: " + year / 4);

            // criteria 2
            if (isInt(year / 100)) {
                console.log("isLeapYear Criteria 2: " + year / 100);
                // criteria 3
                if (isInt(year / 400)) {
                    console.log("isLeapYear Criteria 3: " + year / 400);
                    return true;
                }
            } else {
                return true;
            }
        }

        return false;


    }

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var dayOfWeek = today.getDay();
    var dayOfMonth = today.getDate();
    console.log(year,month, weekDays[dayOfWeek].name, dayOfMonth, months[month].name,isLeapYear(year), today);

    // get days of the month
    var backward = dayOfMonth;
    var forward = months[month].days - dayOfMonth;



    // count backwards
    var before = [];
    var di = dayOfMonth;
    var wi = dayOfWeek;
    while (di > 0) {
        var day = di;
        var dayName = weekDays[wi].name;


        //console.log(day, dayName);
        before.unshift({day: day, number: wi, name: dayName});
        wi =  (wi > 0) ? (wi - 1) : 6;
        di--;
    }

    // count forward
    var after = [];
    var i = dayOfMonth + 1; // exclude today
    var wii = dayOfWeek + 1;
    var daysInMonth = ((months[month].name === "february") && isLeapYear(year)) ? 29 : months[month].days;
    while (i <= daysInMonth) {
        var day = i;
        var dayName = weekDays[wii].name;

        //console.log(day, dayName);
        before.push({day: day, number: wii, name: dayName});
        wii =  (wii < 6) ? (wii + 1) : 0;
        i++;
    }

    var daysOfTheMonth = before.concat(after);
    console.log(daysOfTheMonth);
    var index;
    var firstDayOfTheMonth = "not_set";
    var row = "";
    var wdi = 0;
    for (index in daysOfTheMonth) {
        if (!daysOfTheMonth.hasOwnProperty(index)) {
            continue;
        }

        if (wdi === 0) {
            row += "<tr>";
        }
        console.log(1);
        if (firstDayOfTheMonth === "not_set") {
            console.log(2);
            firstDayOfTheMonth = daysOfTheMonth[index].number;
        }

        var i = 0;
        var val = "";

        // if is int
        if (!isNaN(parseInt(firstDayOfTheMonth))) {
            console.log(firstDayOfTheMonth);
            wdi = firstDayOfTheMonth;
            for (var e = 0; e < firstDayOfTheMonth; e++) {
                row += "<td></td>";
            }
        }

        row += "<td>"+daysOfTheMonth[index].day+"</td>";

        if (wdi === 6) {
            row += "</tr>";
        }
        firstDayOfTheMonth = "done";
        wdi = (wdi === 6) ? 0 : (wdi + 1);
    }

    var calendarTbody = document.getElementById("calendar_tbody");

    calendarTbody.innerHTML = row;
};