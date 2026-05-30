const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const requestSchema = new Schema({
    topic: String,
    sponsor: {
        name: String,
        diocese: String,
        governorate: String
    },
    requesterId: Schema,
    subject: String,
    ownerId: String,
    requirements: [
        {
            name: String,
            deliverable: {
                document_URL: String,
                recipientId: String,
                date: Date
            },
            comments: String,
        }
    ],
    missions: [
        {
            name: String,
            ownerId: String,
            order: Number,
            weight: Number,
            progress: mongoose.Decimal128,
            tasks: [
                {
                    description: String,
                    ownerId: String,
                    attachments: [
                        {
                            documentURL: String,
                            comments: String,
                        }
                    ],
                    date: Date,
                    nextAction: String,
                    nextActionDate: Date,
                }
            ],
            startDate: Date,
            finishDate: Date,
            comments: String,
        }
    ],
    progress: mongoose.Decimal128,
    status: {
        text: String,
        comment: String
    },
    events: {
        initiationDate: Date,
        requirementsReadyDate: Date,
        startDate: Date,
        approvalDate: Date,
        suspensionDate: Date,
        closingDate: Date
    },
    comments: String,
})

const requestModel = model('request', requestSchema);

module.exports = requestModel;