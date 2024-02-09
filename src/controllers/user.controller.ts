import { Request, Response } from "express";

export interface IUserController {
  create(req: Request, res: Response): Promise<void>;
  getAll(req: Request, res: Response): Promise<void>;
}
class UserController implements IUserController {
  async create(req: Request, res: Response): Promise<void> {}
  async getAll(req: Request, res: Response): Promise<void> {}
}

export default UserController;
