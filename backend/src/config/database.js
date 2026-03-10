const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONG0_URI);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDb