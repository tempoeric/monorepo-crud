// backend/server.ts
import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
