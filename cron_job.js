// const express = require('express')
// const app = express()
// const scene = require('./db_model_schema')
// const cron = require('node-cron')
// const mqtt_handler = require('./mqtt_handler')

// // mqtt_handler.setup()

// const currentDateTime = new Date();
// const oneHourFromNow = new Date(currentDateTime.getTime() + 60 * 60 * 1000); // Add 1 hour to the current time
// const today = new Date().toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
// let devices = [];
// let sceneTime = 0;
// let hour = 0;
// let minute = 0;

// const currentTimeString = currentDateTime.toLocaleTimeString('en-US', {
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false
// });

// const oneHourFromNowTimeString = oneHourFromNow.toLocaleTimeString('en-US', {
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false
// });
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     scene.Scene.find({ $and: [{ sceneTime: { $gte: `${currentTimeString}` } }, { sceneTime: { $lt: `${oneHourFromNowTimeString}` } }, { days: { $in: [today] } }] }).exec().then((result) => {
//       // console.log(result)
//       // console.log(result.length);
//       const scenes = result

//       const sceneData = {
//         devices: [],
//         sceneTime: []
//       };


//       for (const scene of scenes) {
//         sceneTime = scene.sceneTime
//         // hour = sceneTime[0]
//         // minute = sceneTime[1]
//         devices = scene.devices
//         const sceneState = scene.sceneState

//         sceneData.devices.push(devices)
//         sceneData.sceneTime.push(sceneTime)
//         // for (let device of devices) {
//         //   console.log(device);
//         //   cronJobExpression = `${minute} ${hour} * * ${today}`
//         //   cron.schedule(cronJobExpression, () => {
//         //     console.log(`Running cron job at ${cronJobExpression}`);
//         //     console.log(device);
//         //     mqtt_handler.publish_message(`${device}/deviceStatus`, "on")
//         //   }, {
//         //     scheduled: false,
//         //     timezone: "Asia/Kolkata"
//         //   })
//         // }
//       }
//       resolve(sceneData);
//     }).catch((error) => {
//       console.log(error)
//       reject(error)
//     })
//   })
// }
// fetchData().then((resultDevices) => {
//   mqtt_handler.setup();
//   const devices = resultDevices.devices
//   const timings = resultDevices.sceneTime
//   // console.log(devices);
//   // console.log(timings);
//   for (let i = 0; i < devices.length; i++) {
//     console.log(devices[i]);
//     console.log(timings[i]);
//     const device = devices[i];
//     const time = timings[i].split(':')
//     hour = time[0]
//     minute = time[1]
//     cronJobExpression = `${minute} ${hour} * * ${today}`
//     for (let j = 0; j < device.length; j++) {
//       console.log(device[j]);
//       cron.schedule(cronJobExpression, () => {
//         console.log(`Running cron job at ${cronJobExpression}`);
//         console.log(device[j]);
//         mqtt_handler.publish_message(`${device[j]}/deviceStatus`, "on")
//       }, {
//         scheduled: true,
//         timezone: "Asia/Kolkata"
//       })
//     }
//   }
// }).catch((error) => {
//   console.log(error);
// })//.finally(() => {
// //   console.log("exiting...");
// //   mqtt_handler.close_connection()
// //   // process.exit(0);
// // })
// // console.log(sceneTime);
// // console.log(hour);
// // console.log(minute);

// // console.log(`currentTime ${currentTimeString}`)
// // console.log(`oneHourLaterTime ${oneHourFromNowTimeString}`)
// // console.log(`Running crontab at ${currentTimeString}`)
