import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("x cccccccxxxxxcc");
});

export default app;
