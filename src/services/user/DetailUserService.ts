import prismaClient from "../../prisma";

class DetailUserService {
  execute(id: string) {
    const user = prismaClient.user.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { DetailUserService };
