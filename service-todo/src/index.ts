import { WorkerEntrypoint } from "cloudflare:workers";

import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";
import { todos } from "./db/schema";

export default class TodoService extends WorkerEntrypoint {
  dbClient = () => {
    const turso = createClient({
      url: this.env.TURSO_CONNECTION_URL!,
      authToken: this.env.TURSO_AUTH_TOKEN,
    });
    const db = drizzle(turso);
    return db;
  };

  async getTodos(userID: string) {
    const db = this.dbClient();
    const result = await db.select().from(todos).all();
    return result;
  }
}
