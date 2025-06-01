import mongoose, { MongooseOptions } from "mongoose";
import config from "../../enviorments/default";
import log from "../logger";
import { installEvents } from '../services/blockchain/events';
import { setupCronJobMap } from '../services/blockchain/cronManager';

function connect(): Promise<void> {
  const { DB } = config;

  const db_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  return mongoose
    .connect(DB as string, db_config as MongooseOptions)
    .then(() => {
      setupCronJobMap()
      .then(()=>{
        log.info("setupCronJob Map done") 
      })
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}

export default connect;