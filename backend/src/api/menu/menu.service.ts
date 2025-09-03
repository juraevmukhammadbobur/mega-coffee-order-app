import prisma from "../../utils/prisma";

export const getAllMenuItems = async () => {
  return prisma.product.findMany();
};
