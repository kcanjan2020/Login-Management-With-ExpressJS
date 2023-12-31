import { model } from "mongoose";
import webUserSchema from "../schema/webUserSchema.js";

export let WebUser = model("WebUser", webUserSchema);
