const express = require("express");
const app = express();
const cors = require("cors");
const { PORT, db } = require("./config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    res.status(200).json({ message: 'Hello NoSQL API' })
})

app.use("/users", require("./routes/users"));
app.use("/movies", require("./routes/movies"));

if (db){
    app.listen(PORT, () => {
        console.log(`This app is listen on PORT: ${PORT}`);  
    })
}
