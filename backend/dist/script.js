"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
const Database_1 = require("./db/Database");
//connecting to database
dotenv_1.default.config();
(0, Database_1.DatabaseConnection)();
app_1.app.listen(process.env.PORT, () => {
    console.log(`Server is running http://localhost:${process.env.PORT}`);
});
