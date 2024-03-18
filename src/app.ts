// Read the .env file.
import * as dotenv from "dotenv";
dotenv.config();

const routes = async (fastify, options) => {
	fastify.get("/", async (request, reply) => {
		return { hello: "world" };
	});
};

export default routes;
