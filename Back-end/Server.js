const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-Parser");
require("dotenv").config();
const { readdirSync } = require("fs");
const app = express();

// ເຮັດຫນ້າທີ່ ໃນການກອງ require ເຂົ້າມາເຊີບເວີ
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// create the connection to database

readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on port ${port}`));
