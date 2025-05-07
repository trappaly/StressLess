import { UserPreferences } from '../db/types';

/**
 * Functions for converting user preference response strings to other types.
 */
export default class UserPreferenceUtils {
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
}