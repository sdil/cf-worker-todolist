import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/todos', async (c) => {
  const todos = await c.env.TODO_SERVICE.getTodos('1')
  return c.json(todos)
})

export default app