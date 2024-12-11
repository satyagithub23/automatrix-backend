const mqtt = require('mqtt');

const broker = 'mqtt://64.227.137.47';

const options = {
    clientId: 'PUBLISHER',
    username: 'jarvis',
    password: 'me-Mosquitto123',
    clean: true
};

const publishOptions = {
    retain: true,
    qos: 1
};

let client;
let setup = () => {
    client = mqtt.connect(broker, options);
    client.on('connect', () => {
        // console.log('Connected to MQTT broker');
    });
    client.on('error', (error) => {
        console.log(`Failed to connect ${error}`);
    });
}

let publish_message = (topic, message) => {
    client.publish(topic, message, publishOptions);
}

let close_connection = () => {
    client.end()
    client.on('end', () => {
        console.log("Client disconnected.");
    })
}

module.exports = { setup, publish_message, close_connection }