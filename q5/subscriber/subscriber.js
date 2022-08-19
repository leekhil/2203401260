const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://mqtt-broker")


const TOPIC = "test/sensor-data";

// Event for handling connection state; Get called when client connects to Broker
client.on("connect",()=>{

        // Immediately subscribe to TOPIC
        client.subscribe(TOPIC,function(error){
            if(!error) {
                console.log(`Subscribed to ${TOPIC}`)
            } else {
                console.log(error)
            }
        })
})


// Event to handle the Subscribed TOPIC messages; Messages comes in buffer format; String conversion done
client.on("message",(top,message)=>{
    console.log(`Topic: ${top}, Message: ${message.toString()}`);
})