/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

/**
 * Don't mind this file ;)
 * It's just here to make "renderDay" function available and initialize the page with an example.
 */
function renderDay(events) {
    TmCalendar.render(events, $("#content")[0]);
}

$(function () {

    var events = [
        {start: 5, end: 120},
        {start: 40, end: 45},
        {start: 130, end: 150},
        {start: 10, end: 100},
        {start: 120, end: 145},
        {start: 20, end: 40},
        {start: 20, end: 80},
        {start: 150, end: 300}
    ];

    TmCalendar.render(events, $("#content")[0]);

});
