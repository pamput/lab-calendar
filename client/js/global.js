/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

function renderDay(events) {
    TmCalendar.render(events, $("#content")[0]);
}

$(function () {

    var events = [
        //{start: 10, end: 100},
        //{start: 20, end: 40},
        //{start: 20, end: 80},
        //{start: 40, end: 45},
        //{start: 5, end: 120},
        //{start: 130, end: 150},
        //{start: 120, end: 145},
        //{start: 150, end: 300}

        //{start: 5, end: 120},
        //{start: 10, end: 100},
        //{start: 20, end: 80},
        //{start: 20, end: 40},
        //{start: 40, end: 45},
        //{start: 120, end: 145},
        //{start: 130, end: 150},
        //{start: 150, end: 300}


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
