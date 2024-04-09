import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

// we  can use express, here we use http to create web server
// http is present as native library in node
const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

// use https://hoppscotch.io/realtime/websocket and put url ws://localhost:8080

const wss = new WebSocketServer({ server }); // create websocket server

// when websocket server connection on
wss.on('connection', function connection(socket) {
  socket.on('error', () => console.error); // on error

  // on any message from any client
  socket.on('message', function message(data, isBinary) {
    // do some action (like broadcast) for each client
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  let userCount = 0;

  console.log('user connected' + ++userCount)

  socket.send('Hello! Message From Server!!'); // send to client who connect
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});