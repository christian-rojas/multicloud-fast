// export default {
//   port: 4000,
//   fetch(request: any) {
//     return new Response("Welcome to Bun yay!");
//   },
// };

import Bao from "baojs";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("OK");
});

app.listen({ port: 8080 });

console.log(process.env.PORT);
