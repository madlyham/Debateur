const sendbtn = document.querySelector(".chatinput span")
const chatinput = document.querySelector(".chatinput textarea")
const chatbox = document.querySelector(".texts")

let userMessage;

const createChatli = (message, className) => {
    const chatli = document.createElement("li")
    chatli.classList.add("texts");
    let chatcontent = className === "outcoming" ? `<p class="outcoming" id="users">${message}</p>` :
     `<p class="outcoming" id="users">${message}</p>`;
    chatli.innerHTML = chatcontent;
    return chatli
}

const handleChat = () =>{
    userMessage = chatinput.value.trim();
    if(!userMessage) return;
    chatbox.appendChild(createChatli(userMessage, "outcoming"));
}

sendbtn.addEventListener("click", handleChat)