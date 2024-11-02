import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: text("id").primaryKey(),
  text: text("text").notNull(),
  completed: integer({ mode: "boolean" }).notNull().default(false),
});
