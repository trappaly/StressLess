import { Request, Response } from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

class SurveyResponse {

    
    // Gets the user responses 
    public static getResponses (req: Request, res: Response): any {
        res.send('get Survey Responses');
    }

    // Saves the user responses to the database 
    public static saveResponses (req: Request, res: Response): any {
        res.send('save Survey Response');
    }



    /* const result = await prisma.user.findMany({
        where: {
          OR: [
            {
              email: {
                endsWith: 'gmail.com',
              },
            },
            { email: { endsWith: 'company.com' } },
          ],
          NOT: {
            email: {
              endsWith: 'admin.company.com',
            },
          },
        },
        select: {
          email: true,
        },
      })

*/

}

export default SurveyResponse;