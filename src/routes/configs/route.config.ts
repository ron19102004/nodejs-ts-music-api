import AuthRoute from "@/auth/auth.route";
import { IRouteRegister } from "./factory.route";
import UserRoute from "../user.route";

//configure routes for application
const RouteConfig: Array<IRouteRegister> = [
  {
    router: new AuthRoute().router,
    prefix: "/auth",
  },
  {
    router: new UserRoute().router,
    prefix: "/users",
  },
];
export default RouteConfig;
