const mongoose = require('mongoose');
require('./Animemodel');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION)
        .then(() => {
         console.log('Connected!')
        }).catch((error) => console.log(error));