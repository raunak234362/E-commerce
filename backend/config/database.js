const mongoose = require("mongoose");

const dotenv = require("dotenv")

const connectDatabase = () => {
  mongoose.connect("mongodb+srv://raunak:qwerty!23456@cluster0.vwjkk.mongodb.net/")
  // mongoose.connect("mongodb://localhost:27017/Ecommerce")
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports=connectDatabase