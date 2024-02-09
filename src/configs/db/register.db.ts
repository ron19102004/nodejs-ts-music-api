import User from "@/entities/user.entity";
import { EntitySchema, MixedList } from "typeorm";

const entities$: MixedList<string | Function | EntitySchema<any>> | undefined =
  [User];

export default entities$;
