var el = document.getElementById('message-form');
if (el) {
    el.addEventListener("submit", function (event) {
        console.log("submitting")
        event.preventDefault()
        var message = document.getElementById("message-input").value;
        msg_html = '<div class="bg-blue-500 text-white p-2 rounded-lg mb-2 self-end"><p class="text-sm">'
        msg_html += message
        msg_html += '</p></div>'
        document.getElementById("messages").innerHTML += msg_html;
        let chatWindow = document.getElementById("messages-container");
        chatWindow.scrollTop = chatWindow.scrollHeight;
        document.getElementById("message-input").value = "";
        document.getElementById("button-submit").innerHTML = '<i class="fa fa-circle-o-notch fa-spin"></i> 正在思考中...';
        document.getElementById("button-submit").disabled = true;
        if (localStorage.getItem('activeDocs') == null) {
            localStorage.setItem('activeDocs', 'default')
        }

        fetch('/api/answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({question: message,
                api_key: localStorage.getItem('apiKey'),
                embeddings_key: localStorage.getItem('apiKey'),
                history: localStorage.getItem('chatHistory'),
                active_docs: localStorage.getItem('activeDocs')}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                msg_html = '<div class="bg-indigo-500 text-white p-2 rounded-lg mb-2 self-start"><code class="text-sm">'
                msg_html += data.answer
                msg_html += '</code></div>'
                document.getElementById("messages").innerHTML += msg_html;
                let chatWindow = document.getElementById("messages-container");
                chatWindow.scrollTop = chatWindow.scrollHeight;
                document.getElementById("button-submit").innerHTML = '发送';
                document.getElementById("button-submit").disabled = false;
                let chatHistory = [message, data.answer];
                localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
            })
            .catch((error) => {
                console.error('Error:', error);
                console.log(error);
                document.getElementById("button-submit").innerHTML = '发送';
                document.getElementById("button-submit").disabled = false;
            });


    });
}