
/* RabbitMQ */
const amqp = require("amqplib");

const msg = {number: process.argv[2]}
connect();
async function connect() {

    try {
        const amqpServer = "amqps://eiygputn:bvh624pUVSvva3olYq1uBcDueRWsXmrA@lionfish.rmq.cloudamqp.com/eiygputn"
        // "amqp://localhost:5672"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");
        // This sends a message to a specific queue
        // RabbitMQ will store this message in the "jobs" queue until it is consumed by a worker or subscriber.
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number}`);
        await channel.close();
        await connection.close();
    }
    catch (ex){
        console.error(ex)
    }

}