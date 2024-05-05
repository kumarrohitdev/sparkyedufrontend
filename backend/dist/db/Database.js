"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dburl = process.env.DBURL || "mongodb://localhost:27017";
const DatabaseConnection = () => {
    mongoose_1.default
        .connect(dburl)
        .then((e) => {
        console.log(`Database connected: ${e.connection.host}`);
    })
        .catch((err) => {
        console.error("Error connecting to database:", err.message);
        process.exit(1);
    });
};
exports.DatabaseConnection = DatabaseConnection;
