const { WebSocketServer } = require('ws');

const server = new WebSocketServer({
  port: 5040
})

server.on('connection', (ws) => {
  ws.on('message', (msg) => {
    console.log('Server has recieved a message!');
    console.log(msg);
    ws.send(`You sent the message: ${msg}`)
  })
  ws.on('error', (error) => {
    console.error('Server has received an error!');
    console.log(error);
  })
})