const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const scene = require('../db_model_schema')



app.use(bodyParser.json())



app.post('/update_status', async (req, res) => {

    const sceneObjectId = req.body.scene_object_id
    const sceneStatus = req.body.scene_state

    const result = await scene.Scene.findByIdAndUpdate(
        { sceneObjectId }, { sceneState: `${sceneStatus}` }, (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
    console.log(result);

})







