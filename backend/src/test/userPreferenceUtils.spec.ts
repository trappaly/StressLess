import { UserPreference, UserPreferences } from '../db/types.ts';
import { faker } from '@faker-js/faker';
import UserPreferenceUtils from '../utils/UserPreferenceUtils.ts';

describe('Test the transform method of user preference utils', () => {
  const user_id = faker.string.uuid();
  const ptData : UserPreference = {
    answer : "735,1095",
    question_id : "pt",
    user_id : user_id,
    id: faker.string.uuid(),
  };

  const wdData : UserPreference = {
    answer : "45",
    question_id : "wd",
    user_id : user_id,
    id: faker.string.uuid(),
  };

  const shData : UserPreference = {
    answer : "13",
    question_id: "sh",
    user_id: user_id,
    id: faker.string.uuid(),
  };

  const stData : UserPreference = {
    answer: "09:15",
    question_id: "st",
    user_id: user_id,
    id: faker.string.uuid(),
  };

  const etData : UserPreference = {
    answer: "18:07",
    question_id: "et",
    user_id: user_id,
    id: faker.string.uuid(),
  };

  const fullUserPreference : UserPreference[] = [
    ptData, wdData, shData, stData, stData, etData
  ];

  const expectedUserPreferences : UserPreferences = {
    productiveTime: [735,1095],
    workDuration: 45,
    sleepHours: 13,
    startTime: 555,
    endTime: 1087,
  };

  it('should return the correct User Preferences model data', async () => {
    expect(UserPreferenceUtils.transform(fullUserPreference)).toEqual(expectedUserPreferences);
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



