export async function enviarMensagemChatGPT(mensagem) {
    const response = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: mensagem })
    });
    const data = await response.json();
    return data.response;
}
