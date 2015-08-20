/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

describe("Group object suite case", function () {

    var tools = TmCalendar.Tools;

    beforeEach(function () {
        TmCalendar.Tools = {
            isValidInterval: function (interval) {
                return tools.isValidInterval(interval);
            }
        };

        spyOn(TmCalendar.Tools, 'isValidInterval').and.callThrough();
    });

    afterEach(function () {
        TmCalendar.Tools = tools;
    });


    it("append simple interval", function () {

        var c = new TmCalendar.Calendar();
        var i = {
            start: 0,
            end: 100
        };

        expect(c.isEmpty()).toBeTruthy();
        expect(c.append(i)).toBeTruthy();
        expect(c.isEmpty()).toBeFalsy();
        expect(c.size()).toBe(1);
    });

    it("multiple append", function () {

        var c = new TmCalendar.Calendar();

        var i1 = {
            start: 0,
            end: 100
        };

        var i2 = {
            start: 90,
            end: 110
        };

        var i3 = {
            start: 0,
            end: 121
        };

        expect(c.isEmpty()).toBeTruthy();
        expect(c.append(i1)).toBeTruthy();
        expect(c.append(i2)).toBeTruthy();
        expect(c.append(i3)).toBeTruthy();
        expect(c.isEmpty()).toBeFalsy();
        expect(c.size()).toBe(3);
    });

    it("multiple append within more groups", function () {

        var c = new TmCalendar.Calendar();

        var i1 = {
            start: 0,
            end: 100
        };

        var i2 = {
            start: 100,
            end: 110
        };

        var i3 = {
            start: 0,
            end: 10
        };

        expect(c.isEmpty()).toBeTruthy();
        expect(c.append(i1)).toBeTruthy();
        expect(c.append(i2)).toBeTruthy();
        expect(c.append(i3)).toBeTruthy();
        expect(c.isEmpty()).toBeFalsy();
        expect(c.groups.length).toBe(2);
        expect(c.size()).toBe(3);
    });

    it("is validating the interval", function () {

        var g = new TmCalendar.Calendar();

        var i = {
            start: 0,
            end: 100
        };

        expect(g.append(i)).toBeTruthy();
        expect(g.size()).toBe(1);

        expect(TmCalendar.Tools.isValidInterval).toHaveBeenCalled()
    });
});