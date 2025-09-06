import { Request, Response } from "express";
import * as ordersService from "./orders.service";
import { error } from "console";
import { stat } from "fs";

export const createOrder = async (req: Request, res: Response) => {
  try {

    const { items } = req.body;

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

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await ordersService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders." });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    if (!status) {
      res.status(400).json({ error: "'New status is missing.'" });
    }

    const updatedOrder = await ordersService.updateOrderStatus(orderId, status);
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: "Failed to update order." });
  }
};
