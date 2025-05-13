import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import FakeDataFactory from './FakeDataFactory';
import UserPreferenceUtils from '../utils/UserPreferenceUtils';
/*
* Tests minute number to hour function: minuteNumberToHour
*/
describe ("test minute number to hour", () => {
    // Testing edge case of 0  
    it("0 min -> 0 hour ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(0)).toBe(0);
    });
    // Testing to make sure it rounds down to 0 even if input isn't 0
    it("30 min -> 0 hour ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(30)).toBe(0);
    });
    // Testing to make sure it works on standard input
    it("60 min -> 1 hour ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(60)).toBe(1);
    });
    // Testing to make sure that it always rounds down even if it's closer to the other hour
    it("179 min -> 2 hours ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(179)).toBe(2);
    });
    // Testing to make sure it always rounds down to the nearest hour
    it("181 min -> 3 hours ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(181)).toBe(3);
    });
    // Testing to make sure it works on larger hours
    it("720 min -> 12 hours ", ( ) => {
        expect(UserPreferenceUtils.minuteNumberToHour(720)).toBe(12);
    });
});



/*
* Tests remaining minutes after rounding down to the hour: minuteNumberToMinute
*/
describe ("test minute number to minute", () => {
    // Testing edge case of 0  
    it("0 min -> 0 hour ", () => {
        expect(UserPreferenceUtils.minuteNumberToMinute(0)).toBe(0);
    });
    // Testing to make sure it works for not full hours
    it("30 min -> 30 min", () => {
        expect(UserPreferenceUtils.minuteNumberToMinute(30)).toBe(30);
    });
    // Test for remaining minutes 
    it ("70 min -> 10 min", () => {
        expect (UserPreferenceUtils.minuteNumberToMinute(70)).toBe(10);
    });
    // Edge case of one up
    it ("121 min -> 1 min", () => {
        expect (UserPreferenceUtils.minuteNumberToMinute(121)).toBe(1);
    });
    // Edge case of one down
    it ("179 min -> 59 min", () => {
        expect (UserPreferenceUtils.minuteNumberToMinute(179)).toBe(59);
    });
    // Returns 0 for multiples of 60
    it ("600 min -> 0 min", () => {
        expect (UserPreferenceUtils.minuteNumberToMinute(179)).toBe(59);
    });

});

/*
 * Tests converting minutes into the correct number of minutes and hours: minuteNumberToHourAndMinute
 */
describe ("test minute number to hour and minute", () => {
    // Tests for 0 edge case
    it ("0 min -> 0 hr, 0 min,", () => {
        expect (UserPreferenceUtils.minuteNumberToHourAndMinute(0)).toEqual([0, 0]);
    });
    // Tests for minutes having a number, but hour having 0
    it ("20 min -> 0 hr, 20 min", () => {
        expect (UserPreferenceUtils.minuteNumberToHourAndMinute(20)).toEqual([0, 20]);
    });
    // Tests for hour having a number, but minutes having 0
    it ("120 min -> 2 hr, 0 min", () => {
        expect (UserPreferenceUtils.minuteNumberToHourAndMinute(120)).toEqual([2, 0]);
    });
    // Tests for both hours and minutes having a number
    it ("400 min ->  6 hr, 40 min", () => {
        expect(UserPreferenceUtils.minuteNumberToHourAndMinute(400)).toEqual([6, 40]);
    });
});

 /*
  * dateToMinuteNumber
  */
describe ("test date to minutes", () => {
    // Testing for 0 
    it("00:00 => 0", () => {
        const result = UserPreferenceUtils.dateToMinuteNumber(new Date('2025-05-08T00:00:00'));
        expect(result).toBe(0);
      });
    // Testing for minutes and no hours 
    it("00:35 => 0", () => {
        const result = UserPreferenceUtils.dateToMinuteNumber(new Date('2025-05-08T00:35:00'));
        expect(result).toBe(35);
      });
      // Testing for hours and no minutes
      it ("4:00 -> 240", () => {
        const result = UserPreferenceUtils.dateToMinuteNumber(new Date('2025-05-08T04:00:00'));
        expect(result).toBe(240);
});
// Testing for both hours and minutes
it ("10:30 -> 630", () => {
    // Checks for both
    const result = UserPreferenceUtils.dateToMinuteNumber(new Date('2025-05-08T10:30:00'));
    expect(result).toBe(630);
});

it ("05:05 -> 305", () => {
    // Checks for future dates
    const result = UserPreferenceUtils.dateToMinuteNumber(new Date('2025-08-20T05:05:00'));
    expect(result).toBe(305);
});
});

/*
 * Tests converting a string to minutes : timeStringToMinuteNumber
 */
describe ("string to minute", () => {
      // Tests for 0 edge case
      it ("0 min -> 0 min,", () => {
        expect (UserPreferenceUtils.timeStringToMinuteNumber("0:0")).toEqual(0);
    });
    // Tests for only minutes and no hours
    it ("45 min -> 45 min", () => {
        expect (UserPreferenceUtils.timeStringToMinuteNumber("0:45")).toEqual(45);
    }); 
    // Tests for both hours and minutes
    it ("1 hr and 30 min -> 90 min", () => {
        expect (UserPreferenceUtils.timeStringToMinuteNumber("1:30")).toEqual(90);
    }); 
    // Tests for only hours converted into minutes
    it ("5 hrs and 0 min -> 300 min", () => {
        expect (UserPreferenceUtils.timeStringToMinuteNumber("5:0")).toEqual(300);
    }); 
});
    