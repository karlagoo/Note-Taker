const express = require("express");
const path = require("path");
const fs = require("fs");
const { userInfo } = require("os");
const { EWOULDBLOCK } = require("constants");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Api Routes
app.get("/api/notes", (req, res) => {
    // read from db.json file
    fs.readFile('./db/db.json', "utf8", (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data))
        res.json(JSON.parse(data))

    });
});

app.post("/api/notes", (req, res) => {
    console.log(req.body);

    fs.readFile('./db/db.json', "utf8", (err, data) => {
        if (err) throw err;
        const noteData = JSON.parse(data)

        // add new note to noteData
        // id 
        const newNoteData = noteData.concat([{ title: req.body.title, text: req.body.text }])

        // replaces with the new data
        fs.writeFile('./db/db.json', JSON.stringify(newNoteData), (err) => {
            console.log(err)
        });
        res.end()

    });
});
    app.delete("/api/notes/:id", (req, res) => {
        res.end()
    });



    // Home Routes
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'))
    });

    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, './public/notes.html'))
    });
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))