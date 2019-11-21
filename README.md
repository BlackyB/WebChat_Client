## Web Browser Chat and WebSocket server

### How to use ?

### Client App 
- First download the Web Chat Client folder on your computer/server => https://github.com/BlackyB/WebChat_Client
- Open your terminal and go in the root client folder
- Run 'npm install' so it will install all required dependencies (package.json included)
- Finaly you can run it with 'npm start' (shortcut for react-scripts start) or build it with 'npm run build' (shotcut for react-scripts build)

The client app will be running on your computer/server
For it to be able to communicate with another user you'll need to install the Web Chat Server

### WebSocket Server

- First download the Web Chat Server folder on your computer/server => https://github.com/BlackyB/WebChat_Server
- Open your terminal and go in the root server folder
- Run 'npm install' so it will install all required dependencies (package.json included)
- Finaly you can run it with 'node server.js'

### Etablish the connexion between Client and Server (If not running on localhost)

- You will need to access WebChat_Client\src\Chat.js file in order to edit the server adress
- On line 6 change 'const URL = 'ws://localhost:80'' with whatever your server adress is
- Keep in mind that if your server runs HTTPS you'll need to change 'ws' to 'wss' aswell so the WebSocket connexion will be secured, otherwhise for an HTTP server leave it that way

### You are all set and ready to chat !


## Features

### Customizable Nickname
- Randomly generated nickname when first connecting
- Users can rename using '/nick NewNickName'
- Nickname is local stored so no need to rename when reconnecting later

### Various chat commands
- Use '/highlight FollowedByYourMessage' to make it appears bigger and darker
- Use '/think' to change the regular black font color to grey




