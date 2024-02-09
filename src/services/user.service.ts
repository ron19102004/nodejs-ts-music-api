import User from "@/entities/user.entity";
import Service from "./service.base";
import { IServiceRead, IServiceWrite } from "./service.interface";

class UserService
  extends Service<User>
  implements IServiceRead<User>, IServiceWrite<User>
{
  //create instance of class
  private static INSTANCE: UserService;
  public static getInstance(): UserService {
    if (!UserService.INSTANCE) {
      UserService.INSTANCE = new UserService();
    }
    return UserService.INSTANCE;
  }
  //end instance of class
  constructor() {
    super("users");
  }
  getAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  create(data: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default UserService;
