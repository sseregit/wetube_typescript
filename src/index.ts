import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(3000, () => {
  console.log("http://localhost:3000 ‼‼");
});
