import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/awesome/applicant', (req: Request, res: Response) => {
  const funInformation = {
    name: 'Brandon Lisonbee',
    hobbies: ['playing the violin', 'country dancing', 'hanging out with friends', 'coding'],
    codingLanguages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'MySQL', 'Node.js', 'NoSQL', 'SASS', 'C#', 'C++', 'Java'],
    lovesChallenges: true,
    additionalInfo: 'Brandon is an awesome applicant who enjoys a variety of hobbies and loves coding in web-related languages. He is always up for a challenge!',
  };

  res.json(funInformation);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
