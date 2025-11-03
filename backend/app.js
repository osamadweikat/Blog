const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config();

connectToDb();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
