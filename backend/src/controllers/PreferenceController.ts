import { Request, Response } from 'express';
import prisma from '../config/prisma';

export default class PreferenceController {
  /**
   * Register all preferences for a user. The question ID will be searched based
   * on the question text provided in the request.
   * 
   * @param req.body
   *  An array of objects with the following fields:
   *    - `question_text`:
   *      Corresponds to a question in the `preference_questions` table with the
   *      matching `question_text` value. This question must exist.
   *    - `answer`:
   *      The answer to the question specified in `req.body.question_text`.
   * @param req.params.user_id
   *  The user ID which is part of the URL.
   */
  public static async postPreferences(
    req: Request,
    res: Response
  ): Promise<any> {
    try {
      // Creates variables to access the user id and variable responses the user has entered on the survey
      const userId = req.params.user_id;
      const preferences = req.body;

      // New array to store user's responses from the survey
      const survey_responses = [];
      // Loops over each user's response in the question and answer array from the user
      for (let preference of preferences) {
        // 1: Find the question that a user asked on the survey
        const question = await prisma.preference_questions.findFirst({
          where: {
            question_text: preference.question_text,
          },
        });
        if (!question) {
          throw new Error('Question not found: ' + preference.question_text);
        }
        // 2: Finds user responses and stores them in an array
        survey_responses.push({
          user_id: userId,
          question_id: question.id,
          answer: preference.answer,
        });
      }

      // 3: Stores the user responses in the database
      const stored_responses = await prisma.user_preferences.createMany({
        // Accesses neccesary variables in user's preferences model
        data: survey_responses,
        // Ensures we don't save the same responses more than once in the database
        skipDuplicates: true,
      });
      // Successfully able to store survey responses in the database
      res.json(stored_responses);
    } catch (error: any) {
      // Unable to get responses
      res
        .status(500)
        .json({ error: 'Error in saving preferences, ' + error.message });
    }
  }

  /**
   * Get all preferences of a user.
   * @param req.params.user_id
   *    The user ID which is part of the URL.
   */
  public static async getPreferencesByUserId(
    req: Request,
    res: Response
  ): Promise<any> {
    try {
      const userId = req.params.user_id;

      // Get all preferences for the user
      const preferences = await prisma.user_preferences.findMany({
        where: {
          user_id: userId,
        },
      });

      res.json(preferences);
    } catch (error: any) {
      res
        .status(500)
        .json({ error: 'Error in fetching preferences, ' + error.message });
    }
  }

  /**
   * Modifies an array of specified user preferences with values in the request,
   * or adds a new user preference to the database if no existing preference
   * with the specified id is found in the database.
   * 
   * @param req.body
   *  An array of objects with the following fields:
   *    - `question_text`:
   *      Corresponds to a question in the `preference_questions` table with the
   *      matching `question_text` value. This question must exist.
   *    - `answer`:
   *      The answer to the question specified in `req.body.question_text`.
   * @param req.params.user_id
   *  The user ID which is part of the URL.
   */
  public static async putPreferenceByUserId(req: Request, res: Response) {
    try {
      const userId = req.params.user_id;
      const preferences = req.body;

      const survey_responses = [];

      for (let preference of preferences) {
        // Find the question ID based on question text
        const question = await prisma.preference_questions.findFirst({
          where: {
            question_text: preference.question_text,
          },
        });

        if (!question) {
          throw new Error('Question not found: ' + preference.question_text);
        }

        const questionId = question.id;

        // Check if there's an existing preference entry for this user + question
        const existing = await prisma.user_preferences.findFirst({
          where: {
            user_id: userId,
            question_id: questionId,
          },
        });

        if (existing) {
          // Update the existing record
          await prisma.user_preferences.update({
            where: { id: existing.id },
            data: {
              answer: preference.answer,
            },
          });
        } else {
          // Create a new record
          await prisma.user_preferences.create({
            data: {
              user_id: userId,
              question_id: questionId,
              answer: preference.answer,
            },
          });
        }

        // Optionally push to response array
        survey_responses.push({
          user_id: userId,
          question_id: questionId,
          answer: preference.answer,
        });
      }

      res.json({
        message: 'User preferences successfully updated.',
        data: survey_responses,
      });
    } catch {
      res.status(404).json({ error: 'Failed to update user preferences' });
    }
  }
}
