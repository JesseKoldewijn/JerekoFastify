// Read the .env file.
import * as dotenv from "dotenv";
dotenv.config();

// Require the framework.
import Fastify from "fastify";

// Instantiate Fastify with some config.
const fastify = Fastify({
	logger: true,
});

const app = import("./src/app");

// Register your application as a normal plugin.
fastify.register(app);

export const viteNodeApp = fastify;
export const application = app;
