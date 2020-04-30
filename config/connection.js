const mongoose = require("mongoose");
const { DATABASE_LIVE } = require("./environment");

mongoose
    .connect(DATABASE_LIVE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('Success connect to database');    
    })
    .catch((error) => {
        console.log(error);
    })

    const db = mongoose.connection;

    module.exports = db;
