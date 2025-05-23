import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello, World!",
  });
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({
    error: "Not Found",
  });
});
export default app;
