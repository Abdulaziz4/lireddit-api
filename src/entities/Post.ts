import { Entity, Property, PrimaryKey } from "@mikro-orm/core";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: "text" })
  title!: string;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date(), type: "date" })
  updatedAt = new Date();
}
