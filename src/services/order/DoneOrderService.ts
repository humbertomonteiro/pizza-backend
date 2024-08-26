import prismaClient from "../../prisma";

class DoneOrderService {
  async execute(order_id: string) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}

export { DoneOrderService };
