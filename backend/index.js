const express = require("express");
const app = express();
const session = require("cookie-session");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");

app.use(cors());
app.use(express.json());

//db connection
require("./db");

//session

app.use(
  session({
    secret: process.env.SECRET_KEY,
  })
);

//errorHandler
app.use(require("./src/middlewares/errorHandler"));
app.use(require("./src/middlewares/Filter"));

//route
app.use("/admin", require("./src/routes/adminRoutes"));
app.use("/products", require("./src/routes/productsRoutes"));

app.use("/users", require("./src/routes/userRoutes"));

app.use(require("./src/middlewares/AuthControl"));

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, () => console.log(`Server runned http://${HOST}:${PORT}`));

//require("./sync")();
