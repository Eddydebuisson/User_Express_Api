import UserService from "../service/user.service";
import {Request, Response} from "express"

export default class UserController {
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  getAll = async (req:Request, res: Response):Promise<void> => {
    const data = await this.service.getAll();
    res.send(data);
  }
  
  getById = async (req:Request, res:Response):Promise<void> => {
    const id = req.params.id
    const data = await this.service.getById(+id);
    res.send(data)
  }

}
