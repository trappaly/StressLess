import { UserPreference, UserPreferences } from '../db/types';

/**
 * Functions for converting user preference response strings to other types.
 */
export default class UserPreferenceUtils {
  public static transform(object: UserPreference[]): UserPreferences {
    const returnedData : UserPreferences = {
      productiveTime: [0, 0],
      workDuration: 0,
      sleepHours: 0,
      startTime: 0,
      endTime: 0,
    };

    object.forEach((item: UserPreference) => {
      const { question_id, answer } = item;
      if (!answer) {
        console.warn("No answer given to: ", question_id);
        return;
      }
      switch (question_id) {
        case 'pt': {
          const times = answer.split(',').map((t: string) => parseInt(t, 10));
          returnedData.productiveTime = [times[0], times[1]];
          break;
        }
        case 'wd':
          returnedData.workDuration = parseInt(answer, 10);
          break;
        case 'sh':
          returnedData.sleepHours = parseInt(answer, 10);
          break;
        case 'st':
          returnedData.startTime = UserPreferenceUtils.timeStringToMinuteNumber(answer);
          break;
        case 'et':
          returnedData.endTime = UserPreferenceUtils.timeStringToMinuteNumber(answer);
          break;
      }
    });

    return returnedData;
  }

  public static minuteNumberToHour(m: number): number {
    return Math.floor(m / 60);
  }

  public static minuteNumberToMinute(m: number): number {
    return m % 60;
  }

  public static minuteNumberToHourAndMinute(m: number): [number, number] {
    return [
      UserPreferenceUtils.minuteNumberToHour(m),
      UserPreferenceUtils.minuteNumberToMinute(m),
    ];
  }

  public static dateToMinuteNumber(d: Date): number {
    return d.getHours() * 60 + d.getMinutes();
  }

  public static timeStringToMinuteNumber(t: string): number {
    const [hourStr, minuteStr] = t.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    if (isNaN(hour) || isNaN(minute)) {
      console.warn("Invalid time format:", t);
      return NaN;
    }
    return hour * 60 + minute;
  }
}