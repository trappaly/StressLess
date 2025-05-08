import { UserPreference } from '@/lib/types';

export function getPreferenceExtractData(data: UserPreference[]) {
  const returnedData = {
    productiveTime: [0, 0],
    workDuration: 0,
    sleepHours: 0,
    startTime: '',
    endTime: '',
  };

  data.forEach((item: UserPreference) => {
    const { question_id, answer } = item;
    if (!answer) {
      console.log('No answer given to: ', question_id);
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
        returnedData.startTime = answer;
        break;
      case 'et':
        returnedData.endTime = answer;
        break;
    }
  });

  return returnedData;
}
