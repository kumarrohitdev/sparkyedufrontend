import { app } from "./app";
import dotenv from "dotenv";
import { DatabaseConnection } from "./db/Database";
//connecting to database
dotenv.config();

DatabaseConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server is running http://localhost:${process.env.PORT}`);
});
