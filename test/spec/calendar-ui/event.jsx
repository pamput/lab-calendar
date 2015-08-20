/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

describe("React calendar suite case", function () {
    it("checks if an event shorter than 20min hides its time", function () {
        var event = [{start: 0, end: 19}];
        var TestUtils = React.addons.TestUtils;

        // Render a checkbox with label in the document
        var calendar = TestUtils.renderIntoDocument(
            <CalendarUI events={event} maxTime={540} startHour={9}/>
        );

        var events = TestUtils.scryRenderedDOMComponentsWithClass(
            calendar, 'hide');

        expect(events.length).toBe(1);
    });
});