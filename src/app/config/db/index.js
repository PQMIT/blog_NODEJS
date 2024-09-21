const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://root:root@datn.bvr7spy.mongodb.net/Education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!" + error);
  }
}

module.exports = { connect };
