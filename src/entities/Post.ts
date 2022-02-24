import { Entity, Property, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ type: "text" })
  title!: string;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ onUpdate: () => new Date(), type: "date" })
  updatedAt = new Date();
}
