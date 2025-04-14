import { Request, Response } from 'express';
import prisma from "../../client";

/*
* Controller for accessing and saving user's survey responses 
*/

class SurveyResponse {

  public static async getResponses (req: Request, res: Response): Promise<any> {
    try {
     // Creates variables to access the user id and variable responses the user has entered on the survey
     const userId = req.params.user_id;
     const responses = req.body;

     // New array to store user's responses from the survey
     const survey_responses = [];
     // Loops over each user's response in the question and answer array from the user
      for (let response of responses) {
        // 1: Find the question that a user asked on the survey
         const question = await prisma.preference_questions.findFirst({
           where: { 
            question_text: response.question_text
          },
         });
         if (!question) {
           throw new Error(`Unable to find the question: ${response.question_text}`);
         }

         // 2: Finds user responses and stores them in an array
         survey_responses.push({
          user_id: userId,
          question_id: question.id,
          answer: response.answer,
        });
      }

     // 3: Stores the user responses in the database
     const store_responses = await prisma.user_preferences.createMany({
     // Accesses neccesary variables in user's preferences model 
     data: survey_responses,
     // Ensures we don't save the same respoonses more than once in the database
     skipDuplicates: true,
     });
       // Succuesfully is able to store survey responses in the database
       res.status(200).json(store_responses);
     }
   // Unable to get survey responses 
 catch (error: any) {
  res.status(500).json({ error: 'Error in saving responses' });
 }
}
} export default SurveyResponse;
