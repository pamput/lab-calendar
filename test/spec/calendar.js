/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

describe("Calendar object suite case", function () {
    it("append simple interval", function () {

        var c = new TmCalendar.Calendar();
        var i = {
            start: 0,
            end: 100
        };

        expect(c.append(i)).toBeTruthy();
        expect(c.size()).toBe(1);
    });
});