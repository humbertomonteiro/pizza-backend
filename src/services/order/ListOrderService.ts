import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const listOrder = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        create_at: "desc",
      },
    });

    return listOrder;
  }
}

export { ListOrderService };
