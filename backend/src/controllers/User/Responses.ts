import { Request, Response } from 'express';
import prisma from "../../client";

/*
* Controller for accessing and saving user's survey responses 
*/


// Should switch create and find 

class SurveyResponse {

  /*
  * Accesses the user's responses to the survey and save to the database 
  */
    public static async getResponses (req: Request, res: Response): Promise<any> {
       try {
        // Creates variables to access the user id and variable responeses 
        const userId = req.params.user_id;
        const responses = req.body;
        // Want to map each user's response to an individual question 
        const survey_responses = await Promise.all(
          responses.map(async (response: { question_text: string; answer: string }) => {
            // Finds the question ID
            const question = await prisma.preference_questions.findFirst({
              where: { question_text: response.question_text },
            });
            if (!question) {
              throw new Error('Unable to find the question: ${response.question_text}');
            }
            return {
              user_id: userId,
              question_id: question.id,
              answer: response.answer,
            };
          })
        );

        // Stores all of the user's responses in the database
        const store_responses = await prisma.user_preferences.createMany({
        // Accesses neccesary variables in user's preferences model 
        data: survey_responses,
        // Ensures we don't save the same respoonses more than once in the database
        skipDuplicates: true,
        });
          // Succuesfully is able to get survey responses 
          res.status(200).json({
            status: "success",
            data: survey_responses,
            message: "You have successfully retrieved survey responses.",
        });
      }
      // Unable to get survey responses 
    catch (error: any) {
            res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Error in retrieving responses",
        });
    }
  }
}
export default SurveyResponse;