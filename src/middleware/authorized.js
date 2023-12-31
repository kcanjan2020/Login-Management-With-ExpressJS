import { WebUser } from "../model/model.js";

let authorized = (roles) => {
  return async (req, res, next) => {
    try {
      let _id = req._id;
      let result = await WebUser.findById(_id);
      let tokenRole = result.role;
      if (roles.includes(tokenRole)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          message: "User not Authorized ",
        });
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        message: "User not Authorized",
      });
    }
  };
};
export default authorized;
