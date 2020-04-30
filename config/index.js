const { PORT, DATABASE_LIVE } = require("./environment");
const db = require("./connection")

module.exports = {
    PORT,
    DATABASE_LIVE,
    db,
};