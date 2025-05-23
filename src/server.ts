import { Server } from "http";
import app from "./app";
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is running onc http://localhost:${PORT}`);

  });