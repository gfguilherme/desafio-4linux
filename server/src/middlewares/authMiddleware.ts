import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, "938e0c061fcfa1730baf72050c840c9fa06ff0d0ace1cdb98c2ab09ce783765609103e")
  } catch {
    return res.sendStatus(401);
  }
}
