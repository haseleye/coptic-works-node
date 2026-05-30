const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const modelSchema = new Schema({
    topic: String,
    description: String,
    type: {
        type: String,
        enum: {
            values: ['ENGINEERING', 'LAWFUL']
        }
    },
    requirements: [
        {
            name: String,
            description: String,
            isOptional: Boolean,
            isMissionable: Boolean
        }
    ],
    missions: [
        {
            name: String,
            description: String,
            order: Number,
            weight: Number
        }
    ]
})

const modelModel = model('model', modelSchema);

module.exports = modelModel;