import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/cloudflare";


export const loader: LoaderFunction = async ({ context, params }) => {
    const todos = await context.cloudflare.env.TODO_SERVICE.getTodos("1");
    return json(todos);
  };

export default function Todo() {
    const data = useLoaderData<typeof loader>()

    return (
        <div>
            <h1 className="font-bold text-xl">Todo</h1>
            <ul>
                {data.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} />
                        <span>{todo.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}