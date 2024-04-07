const sendbtn = document.querySelector(".chatinput span")
const chatinput = document.querySelector(".chatinput textarea")
const chatbox = document.querySelector(".texts")

let userMessage;
const API_KEY = "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"

const createChatli = (message, className) => {
    const chatli = document.createElement("li")
    chatli.classList.add("texts", className);
    let chatcontent = className === "outcoming" ? `<p id="users">${message}</p>` :
     `<p id="bots">${message}</p>`;
    chatli.innerHTML = chatcontent;
    return chatli
}


const generateReply = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p")

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "You are a helpful assistant." },
                {role: "user", content: userMessage}
            ]
        })
    } 

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageElement.textContent = "oopsie! Please try again";
    })
}

const handleChat = () =>{
    userMessage = chatinput.value.trim();
    if(!userMessage) return;
    chatbox.appendChild(createChatli(userMessage, "outcoming"));
    setTimeout(() => {
        const incomingChatLi =createChatli("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        generateReply(incomingChatLi);
    }, 600);
}

sendbtn.addEventListener("click", handleChat)