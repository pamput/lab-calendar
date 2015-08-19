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

        var g = new TmCalendar.Group();
        var i = {
            start: 0,
            end: 100
        };

        expect(g.isEmpty()).toBeTruthy();
        expect(g.append(i)).toBeTruthy();
        expect(g.ending()).toBe(100);
        expect(g.isEmpty()).toBeFalsy();
        expect(g.size()).toBe(1);
    });

    it("multiple append", function () {

        var g = new TmCalendar.Group();

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

        expect(g.isEmpty()).toBeTruthy();
        expect(g.append(i1)).toBeTruthy();
        expect(g.append(i2)).toBeTruthy();
        expect(g.append(i3)).toBeTruthy();
        expect(g.ending()).toBe(121);
        expect(g.isEmpty()).toBeFalsy();
        expect(g.size()).toBe(3);
    });

    it("multiple append with wrong intervals (wrong != invalid)", function () {

        var g = new TmCalendar.Group();

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

        expect(g.isEmpty()).toBeTruthy();
        expect(g.append(i1)).toBeTruthy();
        expect(g.append(i2)).toBeFalsy();
        expect(g.append(i3)).toBeTruthy();
        expect(g.ending()).toBe(100);
        expect(g.isEmpty()).toBeFalsy();
        expect(g.size()).toBe(2);
    });

    it("is validating the interval", function () {

        var g = new TmCalendar.Group();

        var i = {
            start: 0,
            end: 100
        };

        expect(g.append(i)).toBeTruthy();
        expect(g.size()).toBe(1);

        expect(TmCalendar.Tools.isValidInterval).toHaveBeenCalled()
    });
});