## Web Browser Chat and WebSocket server

### How to use ?

### Client App 
- First download the Web Chat Client folder on your computer/server => https://github.com/BlackyB/WebChat_Client
- Open your terminal and go in the root client folder
- Run 'npm install' so it will install all required dependencies (package.json included)
- Finaly you can run it with 'npm start' (shortcut for react-scripts start) or build it with 'npm run build' (shotcut for react-scripts build)

The client app will be running on your computer/server   
For it to be able to communicate with another user you'll need to install the Web Chat Server aswell

### WebSocket Server

- First download the Web Chat Server folder on your computer/server => https://github.com/BlackyB/WebChat_Server
- Open your terminal and go in the root server folder
- Run 'npm install' so it will install all required dependencies (package.json included)
- Finaly you can run it with 'node server.js'

### Etablish the connexion between Client and Server (If not running on localhost)

- You will need to access WebChat_Client\src\Chat.js file in order to edit the server adress
- On line 6 change 'const URL = 'ws://localhost:80'' with whatever your server adress is
- Keep in mind that if your server runs HTTPS you'll need to change 'ws' to 'wss' as well so the WebSocket connexion will be secured, otherwhise for an HTTP server leave it that way

### You are all set and ready to chat !


## Features

### Customizable Nickname
- Randomly generated nickname when first connecting
- Users can rename using '/nick NewNickName'

### Message history
- Nickname is locally stored so no need to rename when reconnecting later
- The last X messages are locally stored (Default is 10, you can change it by modifying 'max_Messages')

### Various chat commands
- Use '/nick' to change your displayed nickname
- Use '/oops' to locally remove your last message
- Use '/highlight FollowedByYourMessage' to make it appears bigger and darker
- Use '/think' to change the regular black font color to grey

##TO DO

- Bug fix : Le dernier message envoyé par l'utilisateur ne se stocke qu'une fois un autre message envoyé, le problème est présent uniquement lors de l'envoi par le client. Les messages retournés par le serveur sont correctement stockés. (Piste: Le traitement de l'actualisation du component Chat.js ne se fait pas au bon moment)

- Optimisation de la mémoire sur l'execution de la méthode 'refresh_History', actuellement la méthode remplace l'intégralité des objets 'Message' dans l'historique au lieu de mettre à jour les modifications.

- Affichage du nom de l'utilisateur en tête du chat. Sur cette version le nickname de l'utilisateur est affiché en en tête. Le chat n'étant pour l'instant pas limité en nombre d'utilisateurs, il faudrait un moyen d'identifier le(s) participants par un autre moyen que leur nickname (IP ?) afin de les reconnaitre et ainsi mettre à jour les listes des utilisateurs dans la conversation.