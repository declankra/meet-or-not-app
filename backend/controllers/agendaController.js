const { Configuration, OpenAIApi } = require('openai');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('../../path-to-your-serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// OpenAI API Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure to set this environment variable
});
const openai = new OpenAIApi(configuration);

exports.generateAgenda = async (req, res) => {
  const { purpose, expectedOutcomeType, expectedOutcome, priority } = req.body;

  // Store data in Firestore
  try {
    await db.collection('meetings').add({
      purpose,
      expectedOutcomeType,
      expectedOutcome,
      priority,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error saving to Firestore:', error);
  }

  // Generate agenda using OpenAI
  try {
    const prompt = `Generate a meeting agenda based on the following details:
    - Purpose: ${purpose}
    - Expected Outcome Type: ${expectedOutcomeType}
    - Expected Outcome: ${expectedOutcome}
    - Priority: ${priority}`;

    const response = await openai.createCompletion({
      model: 'gpt-4o',
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    const agenda = response.data.choices[0].text.trim();
    res.json({ agenda });
  } catch (error) {
    console.error('Error generating agenda:', error);
    res.status(500).json({ error: 'Failed to generate agenda' });
  }
};