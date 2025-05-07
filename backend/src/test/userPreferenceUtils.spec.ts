import { UserPreference, UserPreferences } from '../db/types.ts';
import { faker } from '@faker-js/faker';
import user from '../routes/user.ts';
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