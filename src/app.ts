// Read the .env file.
import * as dotenv from "dotenv";
dotenv.config();

import { type FastifyInstance } from "fastify";

const routes = async (
	fastify: FastifyInstance,
	_options: {
		[key: string]: any;
	}
) => {
	fastify.get("/", async (_request, reply) => {
		reply
			.send({ hello: "world" })
			.code(200)
			.header("Content-Type", "application/json");
	});
};

export default routes;
