const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/index"));
app.use("/upload", require("./routes/upload"));

app.listen(3000, () => console.log("Server chạy tại http://localhost:3000"));
