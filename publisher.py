import paho.mqtt.client as paho
import time

broker = '64.227.137.47'     # broker is nothing but an IP address
port = 1883
topic = ''
message = ''

# Establishing connection
publisher = paho.Client('PUBLISHER')
publisher.username_pw_set('jarvis','me-Mosquitto123')

publisher.will_set('publisher/status',payload="Publisher is offline", qos=0, retain=False)

publisher.connect(broker,port)

publisher.subscribe('subscriber/status')

def on_message(client, userdata, message):
    print(f'Subscriber is : {message.payload.decode()}')

publisher.on_message = on_message

value = 0
while True:
    if publisher.loop() != paho.MQTT_ERR_SUCCESS:
        print("Lost connection with broker")
        break
    if value%2 == 0:
        # publisher.publish('home/room_temp',1)
        # publisher.publish('6920506/deviceStatus',1)
        publisher.publish('6920506/deviceStatus',2)
    else:
        # publisher.publish('home/room_temp',0)
        # publisher.publish('6920506/deviceStatus',0)
        publisher.publish('6920506/deviceStatus',4)
    print('Please check your data on your subscriber code')
    time.sleep(1)
    value += 1



