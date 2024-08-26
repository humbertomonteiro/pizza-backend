import { Request, Response } from "express";
import { DoneOrderService } from "../../services/order/DoneOrderService";

class DoneOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const doneOrderService = new DoneOrderService();

    const order = await doneOrderService.execute(order_id);

    return res.json(order);
  }
}

export { DoneOrderController };
