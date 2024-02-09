import { Router } from "express";

abstract class Route {
  //router from express
  public router: Router;
  constructor() {
    this.router = Router();
  }
}
export default Route;
