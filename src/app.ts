import express, { type Request,  type Response } from "express";
import config from "./config/index.ts";




const app = express();
const PORT = config.port;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World with TypeScript and Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
