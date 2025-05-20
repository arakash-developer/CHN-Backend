import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("x cccc");
});

export default app;
