import DatabaseConfiguration from "./config.db";
import entities$ from "./register.db";

export enum ITypeDB {
  POSTGRESQL = "postgresql",
  MYSQL2 = "mysql2",
}
class DatabaseFactory {
  public static build(type: ITypeDB): DatabaseConfiguration {
    switch (type) {
      case ITypeDB.POSTGRESQL: {
        return DatabaseConfiguration.build("postgres", entities$);
      }
      case ITypeDB.MYSQL2: {
        return DatabaseConfiguration.build("mysql", entities$);
      }
    }
  }
}
export default DatabaseFactory;
