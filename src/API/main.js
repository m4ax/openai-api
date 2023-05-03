// import { Configuration, OpenAIApi } from "openai";
// import fetch from "node-fetch";



const myKey = "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"; 



async function callAPI(state) {


    const body = {
        model: "gpt-3.5-turbo",
        messages: [{role: "system", content: state} ]
    }

    console.log(`This has been handed down: ${state}`)



    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${myKey}`
        },
        body: JSON.stringify(body),
    });


    const data = await response.json()
    const content = data.choices[0].message.content

    return content
};

export default callAPI