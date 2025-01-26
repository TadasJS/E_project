import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./postgresdb/postgresConnection.mjs";

dotenv.config({path: '.env.dev'});

async function intializeDB () {
    try {
      await connectDB('DB connected successfully');
    } catch (error) {
      console.error('DB intialization failed', error);
      process.exit(1);
    }
}

 async function startServer() {  
  await intializeDB();

  const app = express();  
  const PORT = process.env.APP_PORT;
  
  app.get("/", (req, res) => {
    res.status(200).json({ status: "ok", msg: "Server is healty" });
  });
  
  app.get("*", (req, res) => {
    res.status(404).json({ status: "err", msg: "page not found" });
  });
  
  app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
  });
}

startServer();



