// const logEvents = require('./logEvents')

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('log', (msg) => {
//     logEvents(msg);
// });
// myEmitter.emit('log', 'log event emitted');
// const express = require("express");
// const app = express();
// const jobs = {}
    
// app.post("/submit", (req, res) => {
//     const jobId = `job:${Date.now()}`
//     jobs[jobId] = 0;
//     updateJob(jobId, 0); 
//     res.end("\n\n" + jobId + "\n\n");
// });

// app.get("/checkstatus", (req, res) => {
//     console.log("Received Job ID:", req.query.jobId); // Debugging line
//     console.log(jobs[req.query.jobId]);
//     res.end("\n\nJobStatus: " + jobs[req.query.jobId] + "%\n\n");
// });

// // Root URL route
// app.get("/", (req, res) => {
//     res.send("Welcome to the Job Status API! Use /submit to create a job and /checkstatus to check the job status.");
// });

// app.listen(3000, () => console.log("listening on 3000"));

// function updateJob(jobId, prg) {
//     jobs[jobId] = prg;
//     console.log(`updated ${jobId} to ${prg}`);
//     if (prg == 100) return;
//     setTimeout(() => updateJob(jobId, prg + 10), 3000);
// }

// http://localhost:3000/checkstatus?

const http = require("http");
const WebSocketServer = require("websocket").server;

let connections = [];

const httpserver = http.createServer();

const websocket = new WebSocketServer({ "httpServer": httpserver });

httpserver.listen(8080, () => console.log("My server is listening on port 8080"));

websocket.on("request", (request) => {
    const connection = request.accept(null, request.origin);

    connections.push(connection);
    connections.forEach(c => c.send(`User${connection.socket.remotePort} just connected.`));

    connection.on("message", (message) => {
        connections.forEach(c => c.send(`User${connection.socket.remotePort} says: ${message.utf8Data}`));
    });

    connection.on("close", () => {
        // Remove the connection from the list
        connections = connections.filter(c => c !== connection);

        // Announce disconnection to all users
        connections.forEach(c => c.send(`User${connection.socket.remotePort} has disconnected.`));
    });

    connection.on("error", (error) => {
        console.error(`Error occurred: ${error.message}`);
    });
});



//client code 
//let ws = new WebSocket("ws://localhost:8080");
//ws.onmessage = message => console.log(`Received: ${message.data}`);
//ws.send("Hello! I'm client")
