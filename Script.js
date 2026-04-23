function toggleChat() {
    const chat = document.getElementById('chat-window');
    chat.style.display = chat.style.display === 'none' ? 'flex' : 'none';
}

function askAI() {
    const input = document.getElementById('user-input');
    const content = document.getElementById('chat-content');
    
    if (input.value.trim() !== "") {
        // User Message
        content.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
        
        // Simple Bot Logic (Aap ise Google Gemini ya OpenAI API se connect kar sakte hain)
        setTimeout(() => {
            let response = "Dhyanyawad! Rohit jaldi hi aapko reply karenge. Tab tak aap unke projects dekh sakte hain.";
            if(input.value.toLowerCase().includes("autocad")) {
                response = "Rohit ko AutoCAD mein 90% proficiency hai aur wo RDSO approved drawings banate hain.";
            }
            content.innerHTML += `<p style="color: var(--accent);"><b>AI:</b> ${response}</p>`;
            content.scrollTop = content.scrollHeight;
        }, 1000);
        
        input.value = "";
    }
}