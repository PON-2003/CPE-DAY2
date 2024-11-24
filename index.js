const express = require("express");
const bodyParser = require("body-parser");
const db = require("./services/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    const result = await db.query("select * FROM users");
    // console.log(result);
    res.json(result);
});

app.listen(3000, () => {
    console.log("API Running");
});