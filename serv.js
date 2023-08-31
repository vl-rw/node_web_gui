//   export PATH="/home/pc/node-v17.3.0-linux-x64/bin:$PATH"
//   npm i ws

const WebSocket = require('ws')

const ws = new WebSocket.Server({port: 9898});

ws.on('connection', onConnect);


function onConnect(wsClient) {

	console.log('we got him!');

	wsClient.send('hello from the other side');

	wsClient.on('message', function(message) {

		console.log(message.toString());
		
		wsClient.send('sever says: you send me "' + message.toString().toUpperCase() + '"');

	}
);

wsClient.on('close', function() {

		console.log('user is gone');
	
	})
}

