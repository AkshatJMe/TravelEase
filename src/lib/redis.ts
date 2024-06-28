// You can get the REDIS_URL from your environment variables
import { Redis } from "ioredis";

const host = process.env.HOST;
const pass = process.env.PASSWORD;

const connection = new Redis({
  port: 13665, // Redis port
  host: host, // Redis host
  username: "default", // needs Redis >= 6
  password: pass,
  db: 0, // Defaults to 0

  maxRetriesPerRequest: null,
});

export { connection };
