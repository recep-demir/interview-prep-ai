const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => `
You are an AI trained to generate technical interview questions and answers.

Task:
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}
- Write ${numberOfQuestions} interview questions.
- Additional Context: ${description}
- For each question, generate a detailed but beginner-friendly answer.
- If the answer needs a code example, add a small code block inside.
- Keep formatting very clean.
- Return a pure JSON array like:
[
  { "question": "?", "answer": "..." }
]
Important: Only return valid JSON.
`;

const conceptExplainPrompt = (question) => `
You are an AI trained to generate explanations for a given interview question.

Task:
- Explain this question to a beginner:
- Question: "${question}"
- Provide a short title too.
- Return as JSON:
{ "title": "...", "explanation": "..." }
Important: Only return valid JSON.
`;

module.exports = { questionAnswerPrompt, conceptExplainPrompt };
