import prisma from "../../utils/prisma";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export const createNewOrder = async (items: CartItem[]) => {
  const newOrder = await prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        status: "new",
      },
    });

    const orderItems = items.map((item) => {
      return {
        orderId: order.id,
        productId: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      };
    });

    await tx.orderItem.createMany({
      data: orderItems,
    });
    return order;
  });
  return newOrder;
};

export const getAllOrders = async () => {
  const orders = await prisma.order.findMany({
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });
  return orders;
};

export const updateOrderStatus = async (orderId: string, newStatus: string) => {
  return await prisma.order.update({
    where: { id: orderId },
    data: { status: newStatus },
  });
};
