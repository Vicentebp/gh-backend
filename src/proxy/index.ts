import { MongoClient } from "mongodb";
import config from "../config/index.ts";
const uri = config.mongoUri;
const client = new MongoClient(uri);
export { client };
