import express from "express";
import cors from "cors";
import menuRoutes from "./api/menu/menu.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/menu", menuRoutes);

export default app;
