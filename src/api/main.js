import { enviarMensagemChatGPT } from '../api/chatgpt.js';
import { enviarMensagemDeepSeek } from '../api/deepseek.js';

async function enviarMensagemChatGPTFront() {
    const input = document.getElementById('chatgpt-input').value;
    if (!input) return;

    const resposta = await enviarMensagemChatGPT(input);

    const chatBox = document.getElementById('chatgpt-responses');
    chatBox.innerHTML += `<p><strong>Você:</strong> ${input}</p>`;
    chatBox.innerHTML += `<p><strong>ChatGPT:</strong> ${resposta}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById('chatgpt-input').value = '';
}

async function enviarMensagemDeepSeekFront() {
    const input = document.getElementById('deepseek-input').value;
    if (!input) return;

    const resposta = await enviarMensagemDeepSeek(input);

    const chatBox = document.getElementById('deepseek-responses');
    chatBox.innerHTML += `<p><strong>Você:</strong> ${input}</p>`;
    chatBox.innerHTML += `<p><strong>DeepSeek:</strong> ${resposta}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById('deepseek-input').value = '';
}

window.enviarMensagemChatGPT = enviarMensagemChatGPTFront;
window.enviarMensagemDeepSeek = enviarMensagemDeepSeekFront;
