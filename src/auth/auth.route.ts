import Route from "@/routes/configs/router.abstract";
import AuthController, { IAuthController } from "./auth.controller";

class AuthRoute extends Route {
  constructor() {
    super();
    const authController: IAuthController = new AuthController();
    this.router.post("/login", authController.login);
    this.router.post("/register", authController.register);
  }
}
export default AuthRoute;
