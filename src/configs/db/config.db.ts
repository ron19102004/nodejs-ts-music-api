import { DataSource, EntitySchema, MixedList } from "typeorm";
import env from "@/utils/env.util";

class DatabaseConfiguration {
  public static AppDataSource: DataSource;
  public static build(
    type: "postgres" | "mysql",
    entities: MixedList<string | Function | EntitySchema<any>> | undefined
  ): DatabaseConfiguration {
    DatabaseConfiguration.AppDataSource = new DataSource({
      type: type,
      host: env.HOST_DB,
      port: env.PORT_DB,
      username: env.USERNAME,
      password: env.PASSWORD,
      database: env.DB_NAME,
      synchronize: true,
      logging: false,
      entities: entities,
    });
    return new DatabaseConfiguration();
  }
  public test() {
    DatabaseConfiguration.AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  }
}
export default DatabaseConfiguration;
