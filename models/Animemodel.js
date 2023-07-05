const mongoose = require('mongoose');

const animeschema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"]
        },
        maincharacter: {
            type: String,
            required: true,
        },
        noofepisodes: {
            type: Number,
            required: true
        },
        releasedate: {
            type: String,
            required: true
        },
        goodorbad: {
            type: Boolean,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Animemodel = mongoose.model('Anime', animeschema);

module.exports = Animemodel;