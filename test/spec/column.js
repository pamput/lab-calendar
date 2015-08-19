/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

describe("Column object suite case", function () {

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

        var c = new TmCalendar.Column();
        var i = {
            start: 0,
            end: 100
        };

        expect(c.isEmpty()).toBeTruthy();
        expect(c.append(i)).toBeTruthy();
        expect(c.ending()).toBe(100);
        expect(c.isEmpty()).toBeFalsy();
        expect(c.size()).toBe(1);
    });

    it("multiple append", function () {

        var c = new TmCalendar.Column();

        var i1 = {
            start: 0,
            end: 100
        };

        var i2 = {
            start: 100,
            end: 110
        };

        var i3 = {
            start: 120,
            end: 121
        };

        expect(c.isEmpty()).toBeTruthy();
        expect(c.append(i1)).toBeTruthy();
        expect(c.append(i2)).toBeTruthy();
        expect(c.append(i3)).toBeTruthy();
        expect(c.ending()).toBe(121);
        expect(c.isEmpty()).toBeFalsy();
        expect(c.size()).toBe(3);
    });

    it("is validating the interval", function () {

        var c = new TmCalendar.Column();

        var i1 = {
            start: 0,
            end: 100
        };

        expect(c.append(i1)).toBeTruthy();
        expect(c.size()).toBe(1);

        expect(TmCalendar.Tools.isValidInterval).toHaveBeenCalled()
    });
});