const express = require("express");
const { mongoose } = require("mongoose");
const doetnv = require("dotenv").config();
const cors = require("cors");

const UserRouter = require("./routes/user.route.js");

const app = express();

const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI).then(() => {
    console.log("DB Connected Successfully !");
  }).catch((error) => {
    console.log(error);
  });

app.use(UserRouter);

app.listen(PORT, () =>
  console.log(`Server Running On http://localhost:${PORT}`)
);
