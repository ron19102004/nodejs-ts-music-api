import UserController, { IUserController } from "@/controllers/user.controller";
import Route from "./configs/router.abstract";
import JwtAuthenticationFilter from "@/configs/jwt/jwtAuthenticationFilter";

class UserRoute extends Route {
  constructor() {
    super();
    const userController: IUserController = new UserController();
    this.router.get("/new", userController.create);
    this.router.get(
      "/",
      JwtAuthenticationFilter.doFilter,
      userController.getAll
    );
  }
}

export default UserRoute;
