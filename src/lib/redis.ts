// You can get the REDIS_URL from your environment variables
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

import { createClient } from "redis";

const connection = createClient({
  password: "Lr1jnyO2tN32bY8nmG8aq3ozXmcdiRAk",
  socket: {
    host: "redis-13665.c305.ap-south-1-1.ec2.redns.redis-cloud.com",
    port: 13665,
  },
});

export { connection };
