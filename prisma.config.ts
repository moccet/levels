import "dotenv/config";
import { defineConfig, env } from "prisma/config";
import * as dotenv from "dotenv";
import { resolve } from "path";

// Load .env.local file
dotenv.config({ path: resolve(__dirname, ".env.local") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
