import { Request, Response } from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


class SurveyResponse {

    // Gets the user responses 
    public static async getResponses (req: Request, res: Response): any {
        const surveyresponses = await prisma.user.findMany();
        where {
          userID;
        }
           
          res.status(200).json({
            status: "success",
            data: surveyresponses;
            message: "You have successfully retrieved survey responses.",
        });
    } catch (error: any) {
            res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Error in retrieving responses",
        });
    }
        res.send('get Survey Responses');

    // Saves the user responses to the database 
    public static async saveResponses (req: Request, res: Response): any {

        res.status(200).json({
            status: "success",
            data: surveyresponses;
            message: "You have successfully saved survey responses.",
        });
    } catch (error: any) {
            res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Error in saved survey responses",
        });
        res.send('save Survey Response');
    }
}     
export default SurveyResponse;