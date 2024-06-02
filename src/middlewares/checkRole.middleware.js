import { httpStatusCodes } from "../constants/httpStatusCodes.js";

export const checkRole = (roles) => {
  return async (_req, res, next) => {
    let jwtInfo = null;

    try {
      jwtInfo = res.locals.jwtPayload;
      const inRole = roles.includes(jwtInfo.role);

      if (inRole) {
        next();
      } else {
        res.status(httpStatusCodes.FORBIDDEN).json({ message: "Unforbidden" });
      }
    } catch (e) {
      res.status(httpStatusCodes.FORBIDDEN).json({ message: "Unforbidden" });
    }
  };
};
