const express = require("express");
const cors = require("cors");

const app = express();

// Middelware :: Programs :: Which runs in advance.
app.use(cors()); // unblocking cors policy
app.use(express.json()); // this will help to read the data coming in body :: TEXT to JSON

const dbadduser = require("./db.adduser");
const dbloginuser = require("./db.adduser");
const dbforgetuser = require("./db.adduser");
// created an API

app.post("/adduser", async (req, res) => {
    try {
        // lets read the query parameter
        const input = req.body;

        // calling db logic :: async :: non blocking
        await dbadduser.addUser(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.post("/loginuser", async (req, res) => {
    try {
        const input = req.body;

        await dbloginuser.loginUser(input);

        res.json({ opr: true });

    } catch (err) {
        //res.sendStatus(500);
        res.json({ opr: false });

    }
});

app.post("/forgetuser", async (req, res) => {
    try {
        const input = req.body;

        await dbforgetuser.forgetUser(input);

        res.json({ opr: true });

    } catch (err) {
        //res.sendStatus(500);
        res.json({ opr: false });

    }
});
const port = 5000;
app.listen(port);
console.log(port);
