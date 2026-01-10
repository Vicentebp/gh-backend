import express, { type Request, type Response } from "express";
import cors from "cors";
import config from "./config/index.ts";
import router from "./routes/index.ts";

const app = express();
const PORT = config.port;

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World with TypeScript and Express!");
});

app.use("/task", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
