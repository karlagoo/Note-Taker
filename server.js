const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();


// Api Routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
});
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))



// Home Routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
});
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))