export function getPreferenceExtractData(data: any) {
  const returnedData = {
    productiveTime: [0, 0],
    workDuration: 0,
    sleepHours: 0,
    startTime: '',
    endTime: '',
  };

  data.forEach((item: any) => {
    const { question_id, answer } = item;

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
