/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

describe("Utility test suite case", function () {
    it("validates good interval", function () {

        var i = {
            start: 0,
            end: 100
        };

        expect(TmCalendar.Tools.isValidInterval(i)).toBeTruthy();
    });

    it("validates good interval with maxtime", function () {

        var i = {
            start: 0,
            end: 100
        };

        expect(TmCalendar.Tools.isValidInterval(i, 110)).toBeTruthy();
    });

    it("validates good interval with maxtime (exact length)", function () {

        var i = {
            start: 0,
            end: 100
        };

        expect(TmCalendar.Tools.isValidInterval(i, 100)).toBeTruthy();
    });

    it("invalidates too long interval with maxtime", function () {

        var i = {
            start: 0,
            end: 100
        };

        expect(TmCalendar.Tools.isValidInterval(i, 90)).toBeFalsy();
    });

    it("invalidates too long interval", function () {

        var i = {
            start: 0,
            end: 560
        };

        expect(TmCalendar.Tools.isValidInterval(i, 90)).toBeFalsy();
    });

    it("invalidates invalid interval (start < end)", function () {

        var i = {
            start: 100,
            end: 0
        };

        expect(TmCalendar.Tools.isValidInterval(i, 90)).toBeFalsy();
    });

    it("invalidates invalid interval (start = end)", function () {

        var i = {
            start: 100,
            end: 100
        };

        expect(TmCalendar.Tools.isValidInterval(i, 90)).toBeFalsy();
    });

    it("invalidates invalid interval (start < 0)", function () {

        var i = {
            start: -1,
            end: 100
        };

        expect(TmCalendar.Tools.isValidInterval(i, 90)).toBeFalsy();
    });

    it("invalidates invalid interval (end < 1)", function () {

        var i = {
            start: -1,
            end: 100
        };

        expect(TmCalendar.Tools.isValidInterval(i, 90)).toBeFalsy();
    });
});