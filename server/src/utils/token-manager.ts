import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AUTH_COOKIE_NAME } from "./constants.js";

export const createToken = (id: string, email: string, expiresIn) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.signedCookies[`${AUTH_COOKIE_NAME}`];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token not received" });
  }
  return new Promise<void>((resolve, reject) => {
    return jwt.verify(token, process.env.JWT_SECRET, (error, success) => {
      if (error) {
        reject(error.message);
        return res.status(401).json({ message: "Token expired" });
      } else {
        resolve();
        res.locals.jwtData = success;
        return next();
      }
    });
  });
};
