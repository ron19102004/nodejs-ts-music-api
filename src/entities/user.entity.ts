import { Column, Entity } from "typeorm";
import EntityBase from "./entity.base";

@Entity({ name: "users" })
class User extends EntityBase {
  @Column({
    name: "username",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  username: string | undefined;
  @Column({
    name: "password",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  password: string | undefined;
}

export default User;