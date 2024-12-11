import paho.mqtt.client as mqtt_client

broker = '64.227.137.47'
port = 1883

topic = 'home/room_temp' # selecting the topic which you want to subscribe
lwt_topic = 'subscriber/status' # setting the LWT topic

# initiate client 
client = mqtt_client.Client('SUBSCRIBER')

#Use this if broker has username and password
client.username_pw_set('jarvis','me-Mosquitto123')

#Set LWT message
client.will_set(lwt_topic, payload="offline", qos=0, retain=False)


def on_message(client, userdata, message):
    print(f'[+]Info : {message.topic} Change to: {message.payload.decode()}')

client.on_message = on_message

# Create connection with MQTT Broker
client.connect(broker,port)

# subscribe to topic
client.subscribe(topic)
client.subscribe('6920506/deviceStatus')
client.subscribe('6920506/intensityLevel')

client.loop_forever()

