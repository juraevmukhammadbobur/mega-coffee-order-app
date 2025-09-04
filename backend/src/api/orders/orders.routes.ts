import { Router } from "express";
import { createOrder, getAllOrders, updateOrder } from "./orders.controller";

const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.patch("/:id", updateOrder);

export default router;
