require('./bootstrap');

const messages_el = document.getElementById("messages");
const username_input = document.getElementById("username");
const message_input = document.getElementById("message_input");
const message_form = document.getElementById("message_form");

message_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let hasErrors = false;

    if (username_input.value === '') {
        alert('Please enter a username');
        hasErrors = true;
    }

    if (message_input.value === '') {
        alert('Please enter a message');
        hasErrors = true;
    }

    if (hasErrors) {
        return;
    }

    const options = {
        method: 'post',
        url: '/send-message',
        data: {
            username: username_input.value,
            message: message_input.value
        }
    }

    axios(options);

})

window.Echo.channel('chat')
    .listen('.message', (e) => {
        messages_el.innerHTML += "<div class='message'><strong>" + e.username + "</strong>: " + e.message + "</div>"
    })
