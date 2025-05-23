import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("ccc world");

  res.send("cc ff ssssc");
});

export default app;
