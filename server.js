//Dependencies
const express = require("express");
const path = require("path");
const route = express.Router;

const fs = require("fs");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => res.sendFile(path.join(_dirname, "index.html")));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(_dirname, "notes.html"))
);

app.get("/notes", (req, res) => {
  res.json(newNoteDatabase);
});

app.post("notes", (req, res) => {
  console.log("Creating new note");
  const newNote = req.body;
  if (!newDataNote.title || !newDataNote.text) {
    throw new Error("please enter information");
  }

  newDataNote.id = uuid.v1();
  let updateDatabase = newNoteDatabase;
  updatedDatabase.push(newDataNote);
  fs.writeFile("db.json", JSON.stringify(updatedDatabase), (err) => {
    if (err) throw err;
    console.log("success!");
  });
});
//Read the db file
const handleRequest = (req, res) => {
  fs.readFile(`${_dirname}db.json`);
};

// Create our server
//const server = http.createServer(handleRequest);

//Add a note to db file
//const writeable = fs.writeFile("./db.json", function (req, res) {
//res.sendFile(path.join(_dirname, "db.json"));
//});

//
//
