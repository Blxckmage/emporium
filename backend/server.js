require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");

// routes
const productRoutes = require("./routes/product");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// product routes
app.use("/products", productRoutes);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `connected to db & Server is running at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
