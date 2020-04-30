const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
    title: {
        type: String,
        default: "Movie Title",
    },
    genre: {
        type: String,
        default: "Movie Genre",
    },
    poster: String,
    release_year: String,
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Movie = mongoose.model("movies", moviesSchema);

module.exports = Movie;