import jwt from "jsonwebtoken";
import { httpStatusCodes } from "../constants/httpStatusCodes.js";

export const checkJwt = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    const jwtToken = process.env.JWT_SECRET;
    let jwtPayload;

    try {
      jwtPayload = jwt.verify(token.split(" ")[1], jwtToken);
      res.locals.jwtPayload = jwtPayload;
    } catch (error) {
      res
        .status(httpStatusCodes.UNAUTHORIZED)
        .json({ message: "Unauthorized" });
      return;
    }

    next();
  } else {
    res.status(httpStatusCodes.UNAUTHORIZED).json({ message: "Unauthorized" });
  }
};
