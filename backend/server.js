const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController");
// const yachtController = require("./controllers/yachtController");
const userController = require("./controllers/userController");
const commentController = require("./controllers/commentController");
require("dotenv").config();
require("./config/connectDb");

//const connectDb = require("./config/connectDb");

// // config dot env file
// dotenv.config();

// //databse call
// connectDb();

// db connecting
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL);
// const db = mongoose.connection;

// db.on("connected", function () {
//   console.log(`Connected to ${db.host}:${db.port}`);
// });

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));

app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/upload", uploadController);
app.use("/user", userController);
app.use("/comment", commentController);

// starting server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has been started ${port}!`));
