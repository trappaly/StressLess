import { Request, Response } from 'express';
import prisma from "../../client";

/*
* Controller for accessing and saving user's survey responses 
*/

class SurveyResponse {
    
  /*
  * Accesses the user's responses to the survey 
  */
    public static async getResponses (req: Request, res: Response): Promise<any> {
       // Finds all survey responses 
       try {
        // Finds all of the user preferences and survey results 
        const survey_responses = await prisma.user_preferences.findMany({
        // Accesses neccesary variables in user's preferences model 
            where: {
              id: true
            }, 
            select: {
              id: true,
              user_id: true, 
              question_id: true, 
              answer: true,
            },
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
  
    /*
    * Saves the user's responses to the database 
    */ 
    public static async saveResponses (req: Request, res: Response): Promise<any> {
      const {user_id, question_id,answer} = req.body;
      // Checks to make sure if any of them are empty 
      if (!user_id || !question_id || !answer) {
        return res.status(400).json({
          status: "Error: user-id, question_id, or answer is empty", 
        })
      }
      // Creates a new row to store survey user preferences 
      try {
      const survey_preferences = await prisma.user_preferences.create({
        data: {
          user_id,
          question_id, 
          answer,
        }
      })
      // Able to succuesffuly save survey responses 
        res.status(200).json({
        status: "success",
        data: survey_preferences,
        message: "You have saved survey responses.",
        });
     } 
     // Unable to save survey responses 
     catch (error: any) {
         res.status(500).json({
         status: "error",
           code: 500,
            data: [],
            message: "Error in saved survey responses",
        });
    }     
  }
}
export default SurveyResponse;