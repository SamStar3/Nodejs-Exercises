// const logEvents = require('./logEvents')

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('log', (msg) => {
//     logEvents(msg);
// });
// myEmitter.emit('log', 'log event emitted');
const express = require("express");
const app = express();
const jobs = {}

app.post("/submit", (req, res) => {
    const jobId = `job:${Date.now()}`
    jobs[jobId] = 0;
    updateJob(jobId, 0); 
    res.end("\n\n" + jobId + "\n\n");
});

app.get("/checkstatus", (req, res) => {
    console.log("Received Job ID:", req.query.jobId); // Debugging line
    console.log(jobs[req.query.jobId]);
    res.end("\n\nJobStatus: " + jobs[req.query.jobId] + "%\n\n");
});

// Root URL route
app.get("/", (req, res) => {
    res.send("Welcome to the Job Status API! Use /submit to create a job and /checkstatus to check the job status.");
});

app.listen(3000, () => console.log("listening on 3000"));

function updateJob(jobId, prg) {
    jobs[jobId] = prg;
    console.log(`updated ${jobId} to ${prg}`);
    if (prg == 100) return;
    setTimeout(() => updateJob(jobId, prg + 10), 3000);
}

// http://localhost:3000/checkstatus?
