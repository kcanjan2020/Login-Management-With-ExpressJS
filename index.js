import cors from "cors";
import express, { json } from "express";
import { port } from "./config.js";
import connectToMongoDb from "./src/databaseConnection/mongoDbConnection.js";
import webUserRouter from "./src/router/webUserRouter.js";
let expressApp = express();
expressApp.use(json());
expressApp.use(cors());

expressApp.use(express.static("./public"));
expressApp.listen(port, () => {
  console.log(`Express app is listening at port ${port}`);
});
connectToMongoDb();
expressApp.use("/web-users", webUserRouter);
