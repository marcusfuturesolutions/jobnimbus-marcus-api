function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const message = input.value.trim();
  if (!message) return;

  const userMessage = document.createElement('div');
  userMessage.textContent = "You: " + message;
  chatBox.appendChild(userMessage);

  const botResponse = document.createElement('div');
  botResponse.textContent = "Marcus: I'm still learning. Please ask another question.";
  chatBox.appendChild(botResponse);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
