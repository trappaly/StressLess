import { Request, Response } from "express";
import prisma from '../config/prisma';

export default class PreferenceController {
  public static async postPreferences (req: Request, res: Response): Promise<any> {
    try {
      // Creates variables to access the user id and variable responeses 
      const userId = req.params.user_id;
      const preferences = req.body;

      // New array to store responses 
      const survey_responses = [];
      // Loops over each user's response in the question and answer array from the user
      for (let preference of preferences) {
        // Finds each question asked on the survey and gets id
        const question = await prisma.preference_questions.findFirst({
          where: { 
            question_text: preference.question_text
          },
        });
        if (!question) {
          throw new Error('Question not found: ' + preference.question_text);
        }
        // Pushes user responses into the new array
        survey_responses.push({
          user_id: userId,
          question_id: question.id,
          answer: preference.answer,
        });
      }
  
      // Stores all of the user's responses in the database
      const stored_responses = await prisma.user_preferences.createMany({
        // Accesses neccesary variables in user's preferences model 
        data: survey_responses,
        // Ensures we don't save the same responses more than once in the database
        skipDuplicates: true,
      });
      // Succuesfully is able to store survey responses in the database
      res.json(stored_responses);

    } catch (error: any) {
      // Unable to get responses
      res.status(500).json({ error: 'Error in saving preferences, ' + error.message });
    }
  }
}