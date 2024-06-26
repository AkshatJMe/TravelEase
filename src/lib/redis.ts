// You can get the REDIS_URL from your environment variables
import { Redis } from "ioredis";

const connection = new Redis({
  port: 13665, // Redis port
  host: "redis-13665.c305.ap-south-1-1.ec2.redns.redis-cloud.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "Lr1jnyO2tN32bY8nmG8aq3ozXmcdiRAk",
  db: 0, // Defaults to 0

  maxRetriesPerRequest: null,
});

export { connection };
