require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./manageQuery");
const loginRouter = require("./Router/loginRouter");
const postRouter = require("./Router/postRouter");
const getRouter = require("./Router/getRouter");
const deleteRouter = require("./Router/deleteRouter");
const cors = require("cors");
const multer = require("multer");
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

const storage = multer.diskStorage({
  destination: "uploads/", // specify the destination folder
  filename: (req, file, cb) => {
    // generate a unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

app.listen(3000, () => console.log("server start at 3000"));

// db("SELECT * FROM dynamicform").then(result=>{
//     console.log(result)
// })

app.use("/", loginRouter);
app.use("/", postRouter);
app.use("/", getRouter);
app.use("/", deleteRouter);

app.post("/upload", upload.single("file"), async (req, res) => {
  const fileBuffer = req.file.buffer;
  const fileContent = fileBuffer.toString();
  const inputLines = fileContent.trim().split("\n");
  const dataArray = inputLines.map((line) =>
    line.replace(/\r/g, "").split(",")
  );

  const headers = [
    "CampaignID",
    "FirstDisposition",
    "SecondDisposition",
    "ThirdDisposition",
    "ForthDisposition",
  ];

  const resultArray = dataArray.map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || null;
    });
    return obj;
  });

  // ... (your existing code)

  // Initialize an array to store promises from the database queries
  const queryPromises = [];

  for (const row of resultArray) {
    const values = headers.map((header) => row[header]);
    const placeholders = headers.map(() => "?").join(",");
    const query = `INSERT INTO campaigndispositions(${headers.join(
      ","
    )}) VALUES (${placeholders})`;

    // Store the promise in the array without executing it immediately
    queryPromises.push(db(query, values));
  }

  // Wait for all promises to resolve before sending the response
  Promise.all(queryPromises)
    .then((results) => {
      console.log(results);
      res.json({
        message: "file upload Successfully and data saved",
      });
    })
    .catch((err) => {
      res.json({
        message: "Check Campaign id must be integer",
      });
    });
});

// Define the route after multer is configured
app.post("/uploadFile", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;
    res.status(200).json({ message: "File uploaded successfully", filePath });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
