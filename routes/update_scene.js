const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const scene = require('../db_model_schema')


process.env.TZ = 'Asia/Kolkata'


app.use(bodyParser.json())
app.use(express.json())




app.post('/update', async (req, res) => {
  const email = req.body.email
  const sceneName = req.body.scene_name
  const sceneTime = new Date(req.body.scene_time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
  const daysData = req.body.days
  const devicesData = req.body.devices_data
  const sceneRepeat = req.body.scene_repeat
  


  try {
    const result = await scene.Scene.findOneAndUpdate(
      {$and: [{sceneName: sceneName}, {userEmail: email}] },
      {$set: {days: daysData, devices: devicesData, sceneTime: sceneTime, repeatation: sceneRepeat}},
      { new: true },
    );
    res.status(201).json({ msg: `${result._id.valueOf()}` })
  } catch (error) {
    res.status(400).json({ msg: `${error}` })
    console.log(error);
  }

})

module.exports = app  