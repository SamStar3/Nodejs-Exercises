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

// const http = require("http");
// const WebSocketServer = require("websocket").server;

// let connections = [];

// const httpserver = http.createServer();

// const websocket = new WebSocketServer({ "httpServer": httpserver });

// httpserver.listen(8080, () => console.log("My server is listening on port 8080"));

// websocket.on("request", (request) => {
//     const connection = request.accept(null, request.origin);

//     connections.push(connection);
//     connections.forEach(c => c.send(`User${connection.socket.remotePort} just connected.`));

//     connection.on("message", (message) => {
//         connections.forEach(c => c.send(`User${connection.socket.remotePort} says: ${message.utf8Data}`));
//     });

//     connection.on("close", () => {
//         // Remove the connection from the list
//         connections = connections.filter(c => c !== connection);

//         // Announce disconnection to all users
//         connections.forEach(c => c.send(`User${connection.socket.remotePort} has disconnected.`));
//     });

//     connection.on("error", (error) => {
//         console.error(`Error occurred: ${error.message}`);
//     });
// });



//client code 
//let ws = new WebSocket("ws://localhost:8080");
//ws.onmessage = message => console.log(`Received: ${message.data}`);
//ws.send("Hello! I'm client")


// const app = require("express")();
// const jobs = {}

// app.post("/submit", (req, res) =>  {
//     const jobId = `job:${Date.now()}`
//     jobs[jobId] = 0;
//     updateJob(jobId,0);
//     res.end("\n\n" + jobId + "\n\n");
// })

// app.get("/checkstatus", async (req, res) => {
//     console.log(jobs[req.query.jobId])
//     //long polling, don't respond until done
//     while(await checkJobComplete(req.query.jobId) == false);
//     res.end("\n\nJobStatus: Complete " + jobs[req.query.jobId] + "%\n\n")

// } )

// app.listen(8080, () => console.log("listening on 8080"));

// async function checkJobComplete(jobId) {
//     return new Promise( (resolve, reject) => {
//         if (jobs[jobId] < 100)
//             this.setTimeout(()=> resolve(false),  1000);
//         else
//             resolve(true);
//     })
   
// }

// function updateJob(jobId, prg) {
//     jobs[jobId] = prg;
//     console.log(`updated ${jobId} to ${prg}`)
//     if (prg == 100) return;
//     this.setTimeout(()=> updateJob(jobId, prg + 10), 10000)
// }

// http://localhost:8080/checkstatus?jobId=



// const app = require("express")();

// app.get("/", (req, res) => res.send("hello!"));

// app.get("/stream", (req,res) => {

//     res.setHeader("Content-Type", "text/event-stream");
//     send(res);

// })
// const port = process.env.PORT || 8888;

// let i = 0;
// function send (res) {
    
//     res.write("data: " + `hello from server ---- [${i++}]\n\n`);
//     setTimeout(() => send(res), 1000);
// }

// app.listen(port)
// console.log(`Listening on ${port}`)


