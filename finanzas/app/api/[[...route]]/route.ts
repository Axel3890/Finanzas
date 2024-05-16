import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'//Proteger rutas verificando logeo


import authors from "./authors"
import books from "./books"
export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.route("/authors", authors);
app.route("/books", books);


export const GET = handle(app)
export const POST = handle(app)





// app
//     .get('/hello', 
//     clerkMiddleware(),                            //
//     (c) => {
//         const auth = getAuth(c);
//         if(!auth?.userId){
//             return c.json({error: "Sin acceso"}); // Verificar Logeo
//         }

//         return c.json({
//             message: 'Hello Next.js!',
//             userId: auth.userId
//         })
//         })                                         //

//     .get("/hello/:test", (c) => {
//         const test = c.req.param("test");

//         return c.json({
//             message: "Hello world",
//             test: test,
//         })
//         })
//     .post("/",
//         zValidator("json", z.object({
//             name: z.string(),
//             userId: z.string(),
//         })),
//         (c) => {
//             const {name, userId} = c.req.valid("json");
//             return c.json({});
//         }
//     )