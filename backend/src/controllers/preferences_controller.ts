import { Request, Response } from 'express';
import pool from '../config/db';



// Need to edit this 


// Range of Time of Day 

// Length of Time they want to work 

// Sleep they typically get 

// Time to start doing work 

// Time to stop doing work 



// Get user preferences
//export const get_preferences = async (req: Request, res: Response) => {
  //  try {
        // Get user ID from request parameters
    //    const { userId } = req.params; 
        // Retrieves user preferences
      //  const result = await pool.query('user preferences table', [userId]);

        // If the user preferences aren't found
        // if (result.rows.length === 0) {
           // return res.status(404).json({ message: 'Preferences not found' });
        // }
        // Return user preferences
        // res.json(result.rows[0]); 
    // } catch (error) {
       //  res.status(500).json({ error: 'Server error' });
    // }
// };

// Save user preferences
// export const save_preferences = async (req: Request, res: Response) => {
   // try {
     //   const { userId, topics, availability } = req.body;
       // const result = await pool.query(
         //   `INSERT INTO preferences (user_id, topics, availability)
           //  VALUES ($1, $2, $3) ON CONFLICT (user_id)
            // DO UPDATE SET topics = $2, availability = $3 RETURNING *`,
            // [userId, topics, availability]
        // );

       // res.status(201).json({ message: 'Preferences saved', data: result.rows[0] });
    // } catch (error) {
       // res.status(500).json({ error: 'Server error' });
    // }
// };
