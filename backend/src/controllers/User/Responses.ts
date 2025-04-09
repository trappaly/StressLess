import { Request, Response } from 'express';

// TODO: what is response? We have preference question and preference, which is the answer of user
class SurveyResponse {
  // Gets the user responses
  public static getResponses(req: Request, res: Response): any {
    res.send('Survey Response');
  }

  // Saves the user responses to the database
  public static saveResponses(req: Request, res: Response): any {
    res.send('Survey Response');
  }
}

export default SurveyResponse;
