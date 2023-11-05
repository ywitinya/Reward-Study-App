
import { pool } from './api'; 

export default async (req, res) => {
  if (req.method === 'POST') {
    const userData = req.body;
    const confirmationToken = generateUniqueToken();

    try {
      
      const values = [userData.email, userData.username, userData.password, confirmationToken];

      const result = await pool.query(insertQuery, values);
      const userId = result.rows[0].id;

      // Send a confirmation email to the user's email address
      sendConfirmationEmail(userData.email, confirmationToken);

      res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  } else {
    res.status(405).end(); 
  }
};
