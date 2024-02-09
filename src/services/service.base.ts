import DatabaseConfiguration from "@/configs/db/config.db";
import {ObjectLiteral, Repository } from "typeorm";

abstract class Service<Entity extends ObjectLiteral> {
  protected repository: Repository<Entity>;
  constructor(entityName: string) {
    this.repository =
      DatabaseConfiguration.AppDataSource.getRepository(entityName);
  }
}
export default Service;