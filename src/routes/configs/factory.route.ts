import e, { Router } from "express";
import RouteConfig from "./route.config";
import listEndpoints from "express-list-endpoints";
import env from "@/utils/env.util";
export interface IRouteRegister {
  router: Router;
  prefix?: string;
}
class RouterFactory {
  private app: e.Application;
  constructor(app: e.Application) {
    this.app = app;
  }
  public static build(app: e.Application): RouterFactory {
    RouteConfig.forEach((routeRegister: IRouteRegister) => {
      app.use(
        routeRegister.prefix ? `/api${routeRegister.prefix}` : "/api",
        routeRegister.router
      );
    });
    return new RouterFactory(app);
  }
  // log routes which are registered
  public log() {
    //create a new list endpoints to watch routes are being online online
    const list = listEndpoints(this.app);
    const log = list.map((value: listEndpoints.Endpoint, index: number) => {
      return `path: ${env.HOST}:${env.PORT}${
        value.path
      } || methods: ${value.methods
        .map((value: string) => value)
        .join(",")} || middlewares: ${value.middlewares
        .map((value: string) => value)
        .join(",")}`;
    });
    console.log("Routers:", log);
  }
}
export default RouterFactory;
