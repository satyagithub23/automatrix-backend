const db_connection = require('./db')


// DB Schema (In mongo db we need to create a schema first)
const userSchema = db_connection.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passWord: {
        type: String,
        required: true
    }
}, { timestamps: true })

// DB Model
const User = db_connection.model('user', userSchema);

const sceneSchema = db_connection.Schema({
    userEmail: {
        type: String,
        required: true,
    },
    sceneName: {
        type: String,
        required: true
    }, 
    sceneTime: {
        type: String,
        default: '0',
    },
    sceneState: {
        type: String,
        default: 'off',
    }, 
    repeatation: {
        type: Boolean,
        default: false,
    }, 
    days: {
        type: db_connection.Schema.Types.Array,
    },
    devices: {
        type: db_connection.Schema.Types.Array,
    }
}, { timestamps: true })

const Scene = db_connection.model('scene', sceneSchema)

module.exports = { User, Scene }



