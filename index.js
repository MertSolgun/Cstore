const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");

app.use(express.json());

//db connection
require("./db");
//errorHandler
app.use(require("./src/middlewares/errorHandler"));

//route

app.use("/admin", require("./src/routes/adminRoutes"));

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, () => console.log(`Server runned http://${HOST}:${PORT}`));
