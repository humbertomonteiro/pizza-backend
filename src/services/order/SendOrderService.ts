import prismaClient from "../../prisma";

class SendOrderServise {
  async execute(order_id: string) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });

    return order;
  }
}

export { SendOrderServise };
