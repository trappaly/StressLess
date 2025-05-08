import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import FakeDataFactory from './FakeDataFactory';
import UserPreferenceUtils from '../utils/UserPreferenceUtils';
/*
* Tests minute number to hour function: minuteNumberToHour
*/
describe ("test minute number to hour", () => {
    it("0 min -> 0 hour ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(0)).toBe(0);
    });
    it("30 min -> 0 hour ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(30)).toBe(0);
    });
    it("60 min -> 1 hour ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(60)).toBe(1);
    });
    it("179 min -> 2 hours ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(179)).toBe(2);
    });
    it("181 min -> 3 hours ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(181)).toBe(3);
    });
});




// /*
// * Tests remaining minutes after rounding down to the hour: minuteNumberToMinute
// */
// describe ("test minute number to minute", () =>) {
    
// }


// /*
// * minuteNumberToHourAndMinute
// */
// describe ("test minute number to hour and minute", () =>) {
    
// }

// /*
// * dateToMinuteNumber
// */
// describe ("test date to minute", () =>) {
    
// }

// /*
// * timeStringToMinuteNumber
// */
// describe ("string to minute", () =>) {
    
// }