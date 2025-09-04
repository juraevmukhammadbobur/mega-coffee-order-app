import express from "express";
import cors from "cors";
import menuRoutes from "./api/menu/menu.routes";
import orderRoutes from "./api/orders/orders.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);

export default app;
