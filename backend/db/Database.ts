import mongoose from "mongoose";

const dburl: string = process.env.DBURL || "mongodb://localhost:27017";

export const DatabaseConnection = () => {
  mongoose
    .connect(dburl)
    .then((e) => {
      console.log(`Database connected: ${e.connection.host}`);
    })
    .catch((err) => {
      console.error("Error connecting to database:", err.message);
      process.exit(1); 
    });
};
