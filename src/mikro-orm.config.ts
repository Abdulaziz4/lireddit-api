import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";

export default {
  entities: ["./dist/entities"], // path to our JS entities (dist), relative to `baseDir`
  entitiesTs: ["./src/entities"], // path to our TS entities (src), relative to `baseDir`
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
  },
} as Parameters<typeof MikroORM.init>[0];
