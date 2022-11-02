import Fastify from "fastify";
import getApp from "./plugin.js";

const fastify = Fastify({ logger: true });

const app = getApp(fastify);

const port = process.env.PORT || 5000;

app.then((app) => app.listen({ port, host: '0.0.0.0' })).then(() => console.log(`server has been started on port: ${port}`));
