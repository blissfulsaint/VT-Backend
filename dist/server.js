"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.get('/awesome/applicant', (req, res) => {
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
