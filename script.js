document.addEventListener("DOMContentLoaded" , function(){

    const messageInput=document.querySelector(".input-message");
    const sendButton=document.querySelector(".send-button");
    const chatMessage=document.querySelector(".chat-section");

    function intializeChat(){

        sendButton.addEventListener('click' , handleSendMessage);
        messageInput.addEventListener('input' , handleInputChange);
        messageInput.addEventListener('keypress' , handleKeyPress);

        scrollToBottom();

    } 
    
    function handleSendMessage(){
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, true);
            messageInput.value = '';
            handleInputChange(); 
        }

    }

    function handleKeyPress(e){
        if(e.key==='Enter' && !e.shiftKey){
            e.preventDefault();
            handleSendMessage();
        }
    }

    function handleInputChange(){
        const message = messageInput.value.trim();
        sendButton.disabled = !message;

        // message.style.height= 'auto';
        // message.style.height=Math.min(messageInput.scrollHeight , 120) + 'px';
    }

    function addMessage(text , isSent=true){
        const messageDiv = document.createElement('div');

        messageDiv.classList.add(isSent ? 'send-message' : 'receive-message');
        messageDiv.textContent=text;

        chatMessage.appendChild(messageDiv);
        scrollToBottom();

        if(isSent){
            setTimeout(() => {addMessage('this automated Message' , false); },1000);
        }
    }

    function scrollToBottom() {
        chatMessage.scrollTop = chatMessage.scrollHeight;
    }

    intializeChat();

});
