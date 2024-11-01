import { type PlatformProxy } from "wrangler";
import TodoService from '../service-todo/src/index'

interface Env {
	TODO_SERVICE: Service<TodoService>;
}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}