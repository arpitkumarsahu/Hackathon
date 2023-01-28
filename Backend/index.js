const express = require("express");
const cors = require("cors");
const { connection } = require("./config/connection");

const { authRouter } = require("./routes/Auth.route");
const { courseRouter } = require("./routes/Course.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Wlcome to Hackathon");
});

app.use("/course", courseRouter);
app.use("/authentication", authRouter);

app.listen(8080, async () => {
  connection();
  console.log(`Port is Running at 8080`);
});

// "first_name":"Arpit",
// "last_name":"Sahu",
// "age":25,
// "email":"arpit@gmail.com",
// "password":"arpit123",
// "mobile":"9090516504"
