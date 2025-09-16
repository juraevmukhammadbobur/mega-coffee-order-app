import { Request, Response } from "express";
import * as menuService from "./menu.service";

export const getMenu = async (req: Request, res: Response) => {
  try {
    const menuItems = await menuService.getAllMenuItems();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
};
