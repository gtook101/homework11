//Dependencies
const express = require("express");
const path = require("path");

const fs = require("fs");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", (req, res) => res.sendFile(path.join(_dirname, "index.html")));

app.get("./notes", function (req, res) {
  res.sendFile(path.join(_dirname, "notes.html"));
});

//Read the db file
const handleRequest = (req, res) => {
  fs.readFile(`${_dirname}/notes.html`);
};

// Create our server
const server = http.createServer(handleRequest);

//Add a note to db file
const writeable = fs.writeFile("/api/notes", function (req, res) {
  res.sendFile(path.join(_dirname, "db.json"));
});

//Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
