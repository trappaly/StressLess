/**
 * Type that represents user preference input for scheduler.
 */
type UserPreferences = {
  productiveTime: Date[],
  workDuration: number,
  sleepHours: number;
  startTime: Date[],
  endTime: Date[],
};

export default UserPreferences;