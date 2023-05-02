import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch";



const myKey = "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"; 

const body = {
    model: "gpt-3.5-turbo",
    messages: [{role: "system", content: "What is the meaning of life?"} ]
}

async function openAI() {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${myKey}`
        },
        body: JSON.stringify(body),
    });
    const data = await response.json()
    // console.log(data);
    const content = data.choices[0].message
    console.log(content)
};

openAI();