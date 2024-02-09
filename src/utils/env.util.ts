import * as dotenv from "dotenv";

dotenv.config();
const env = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  PORT_DB: parseInt(process.env.PORT_DB ?? ""),
  HOST_DB: process.env.HOST_DB,
  USERNAME: process.env._USERNAME,
  PASSWORD: process.env._PASSWORD,
  DB_NAME: process.env.DB_NAME,
};
export default env;
