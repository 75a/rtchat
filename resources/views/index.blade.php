<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width" initial-scale="1.0">
        <title>Real time chat</title>

        <link rel="stylesheet" href="./css/app.css">

    </head>
    <body>
        <div class="app">
            <header class="main-header">
                <h1 class="header-text">Real time chat</h1>
                <input type="text" name="username" id="username" placeholder="Enter your nickname..."/>
            </header>
            <div id="messages" class="messages-container"></div>

            <form id="message_form">
                <input type="text" name="message" id="message_input" placeholder="Write a message..."/>
                <button type="submit" id="message_send" class="button-send">Send</button>
            </form>
        </div>

        <script src="./js/app.js"></script>


    </body>
</html>
