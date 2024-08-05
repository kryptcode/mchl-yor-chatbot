import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

const HF_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;

// export async function POST(request) {
//   const { message, language } = await request.json();

//   const prompt = generatePrompt(message, language);

//   try {
//     console.log('Sending request to Hugging Face API...');
//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/gpt2",
//       {
//         headers: { 
//           Authorization: `Bearer ${HF_API_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//         method: "POST",
//         body: JSON.stringify({ inputs: prompt }),
//       }
//     );
    
//     console.log('Response status:', response.status);
//     const responseText = await response.text();
//     console.log('Response body:', responseText);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = JSON.parse(responseText);
    
//     if (result[0] && result[0].generated_text) {
//       return NextResponse.json({ result: result[0].generated_text.trim() });
//     } else {
//       console.log('Unexpected response format:', result);
//       throw new Error('Unexpected response format');
//     }
//   } catch(error) {
//     console.error('Error details:', error);
//     return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
//   }
// }

// function generatePrompt(message, language) {
//   const basePrompt = language === 'yoruba' 
//     ? "Ọ jẹ́ olùdámọ̀ràn ìlera ọpọlọ tí ó ń sọ̀rọ̀ ní èdè Yorùbá. Dáhùn sí ìbéèrè yìí:"
//     : "You are a mental health counselor speaking in English. Respond to this query:";

//   return `${basePrompt}\n\nHuman: ${message}\n\nAI:`;
// }

export async function POST(request) {
    const { message } = await request.json();

    const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });
    
    const data = await response.json();
    return NextResponse.json(data);
}
