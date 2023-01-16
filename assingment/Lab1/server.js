import express from "express";
import cors from "cors";
import bodyPaser from "body-parser";

// When you want to get filePath on ESModule
// https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.use(cors());

app.use(bodyPaser.urlencoded({ extended: true }));

// To use css file in ESJ
// https://stackoverflow.com/questions/18629327/adding-css-file-to-ejs
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/post", (req, res) => {
  res.render("post");
});

const guestBooks = [
  {
    id: 1,
    date: "2023-01-01",
    impression: "I love this guest house!",
    author: "Rei",
  },
  {
    id: 2,
    date: "2023-01-02",
    impression: "I like this guest house!",
    author: "Reiya",
  },
  {
    id: 3,
    date: "2023-01-03",
    impression: "This guest house is good!",
    author: "Rein",
  },
];

app.post("/read", (req, res) => {
  const { date, impression, author } = req.body;

  const newGuestBook = {
    id: guestBooks.lenght + 1,
    date: date,
    impression: impression,
    author: author,
  };

  guestBooks.push(newGuestBook);
  res.render("read", { guestBooks });
});

app.get("/read", (req, res) => {
  console.log(guestBooks);
  res.render("read", { guestBooks });
});

app.all("*", (req, res) => {
  res.render("404");
});

app.listen(5001, () => {
  console.log("Server started on port 5001");
});
