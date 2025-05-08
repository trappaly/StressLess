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