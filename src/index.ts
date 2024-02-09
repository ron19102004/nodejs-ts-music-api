import express from "express";
import env from "@/utils/env.util";
import RouterFactory from "@/routes/configs/factory.route";
import "reflect-metadata"
import DatabaseFactory, { ITypeDB } from "@/configs/db/factory.db";


const bootstrap = (): void => {
  //create a new application
  const app: express.Application = express();
  //connection to database
  DatabaseFactory.build(ITypeDB.POSTGRESQL).test()
  //register routes
  RouterFactory.build(app).log();
  //start the application
  app.listen(env.PORT, () => {
    console.log(`listening on ${env.HOST}:${env.PORT}`);
  });
};
try {
  bootstrap();
} catch (error: any) {
  console.error("Error:", error.message);
}
