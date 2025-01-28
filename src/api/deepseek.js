export async function enviarMensagemDeepSeek(mensagem) {
    const response = await fetch('/api/deepseek', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: mensagem })
    });
    const data = await response.json();
    return data.response;
}
