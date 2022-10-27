const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@moncluster.6gq7hus.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    //useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
