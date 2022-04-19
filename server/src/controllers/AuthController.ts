import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const users = [
  {
    id: 1,
    username: "4linux",
    password: "4linux",
  },
];

class AuthController {
  async authenticate(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    const user = users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (!user) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, "938e0c061fcfa1730baf72050c840c9fa06ff0d0ace1cdb98c2ab09ce783765609103e", {
      expiresIn: "1d",
    });

    return res.json({
      user,
      token,
    });
  }
}

export default new AuthController();
