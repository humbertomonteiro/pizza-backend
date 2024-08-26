import { Request, Response } from "express";
import { SendOrderServise } from "../../services/order/SendOrderService";

class SendOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const sendOrderService = new SendOrderServise();

    const order = await sendOrderService.execute(order_id);

    return res.json(order);
  }
}

export { SendOrderController };
