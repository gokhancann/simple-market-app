const express = require("express");
const colors = require('colors');

const app = express();


// parse requests of content-type - application/json
app.use(express.json());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to simple-market application." });
});


require("./routes/sales.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require("./models");
db.sequelize.sync();
