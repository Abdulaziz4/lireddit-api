"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
exports.default = {
    entities: ["./dist/entities"],
    entitiesTs: ["./src/entities"],
    dbName: "lireddit",
    type: "postgresql",
    debug: !constants_1.__prod__,
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        glob: "!(*.d).{js,ts}",
    },
};
//# sourceMappingURL=mikro-orm.config.js.map