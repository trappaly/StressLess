/**
 * Type that represents user preference input for scheduler.
 */
type UserPreferences = {
  /**
   * productiveTime is stored in the database as an string of two comma-separated 
   * numbers, which are the minute numbers. This is because of the unwanted components
   * of the Date type, which leads to comparison issues.
   */
  productiveTime: [number, number],

  /**
   * workDuration is stored in the database as a string of a number representing the
   * preferred duration that a user can work at a time in minutes.
   */
  workDuration: number,

  /**
   * sleepHours is stored in the database as a string of a number representing the
   * number of hours the user wants to sleep.
   */
  sleepHours: number;

  /**
   * startTime is stored in the database as a 24-hour time string such as "09:00" or "23:59".
   * This will be converted to a minute number for ease of comparison.
   */
  startTime: number,

  /**
   * endTime is stored in the database as a 24-hour time string such as "09:00" or "23:59".
   * This will be converted to a minute number for ease of comparison.
   */
  endTime: number,
};

export default UserPreferences;