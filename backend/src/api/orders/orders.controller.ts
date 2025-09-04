import { Request, Response } from "express";
import * as ordersService from "./orders.service";

export const createOreder = async (req: Request, res: Response) => {
  try {
    const items = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ error: "Cart items are missing or empty." });
    }

    const newOrder = await ordersService.createNewOrder(items);

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
};
