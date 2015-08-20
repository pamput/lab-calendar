/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

describe("React calendar suite case", function () {
    it("checks insertion of a single event", function () {
        var event = [{start: 0, end: 540}];
        var TestUtils = React.addons.TestUtils;

        // Render a checkbox with label in the document
        var calendar = TestUtils.renderIntoDocument(
            <CalendarUI events={event} maxTime={540} startHour={9}/>
        );

        var events = TestUtils.scryRenderedDOMComponentsWithClass(
            calendar, 'calendar-event');

        expect(events.length).toBe(1);
    });

    it("checks insertion of a multiple events", function () {
        var event = [{start: 0, end: 540}, {start: 0, end: 540}];
        var TestUtils = React.addons.TestUtils;

        // Render a checkbox with label in the document
        var calendar = TestUtils.renderIntoDocument(
            <CalendarUI events={event} maxTime={540} startHour={9}/>
        );

        var events = TestUtils.scryRenderedDOMComponentsWithClass(
            calendar, 'calendar-event');

        expect(events.length).toBe(2);
    });

    it("checks insertion of an invalid event", function () {
        var event = [{start: 0, end: 560}];
        var TestUtils = React.addons.TestUtils;

        expect(function () {
            TestUtils.renderIntoDocument(
                <CalendarUI events={event} maxTime={540} startHour={9}/>
            )
        }).toThrow("Invalid Interval: {\"start\":0,\"end\":560}");
    });

});