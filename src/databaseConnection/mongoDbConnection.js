import mongoose from "mongoose";

let connectToMongoDb = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/Login_Management");
    console.log("Our application is connected to mongoDb Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongoDb;
