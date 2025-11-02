import { GoogleGenAI } from '@google/genai'
export async function getTranslation(req, res) {

    console.log(req.body)
    const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `translate from English to ${req.body.lan}: ${req.body.input}`,
        config: {
            systemInstruction: "You are a professional translator, return just one best translation",
        }           
    })

    const returnObj = {
        translation: response.text
    }
    console.log('translation received')
    console.log(response.text)
    res.json(returnObj)
} 