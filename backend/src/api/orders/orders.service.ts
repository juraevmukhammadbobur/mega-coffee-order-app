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
