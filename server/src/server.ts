import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import routes from "./routes";

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Desafio 4Linux" });
});

app.listen("3001", () => {});
