const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const scene = require('../db_model_schema')

app.use(bodyParser.json())

app.post('/create_scene', async (req, res) => {
    console.log(req);
    const email = req.body.email
    const sceneName = req.body.scene_nm
    const sceneTime = req.body.scene_time
    const sceneState = req.body.scene_state
    const booleanRepeat = req.body.boolean_repeat

    try {
        const result = await scene.Scene.create({
            userEmail: email,
            sceneName: sceneName,
            sceneTime: sceneTime,
            sceneState: sceneState,
            repeatation: booleanRepeat,
        });

        return res.status(201).json({ msg: `Scene Created` })
    } catch (error) {
        return res.status(501).json({ msg: `Bad Request` })
    }
})

module.exports = app
