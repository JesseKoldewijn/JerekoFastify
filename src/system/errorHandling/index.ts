import { type ProblemJsonCore } from "./types";

type ConstructErrorResponseParams = {
	status?: ProblemJsonCore["status"];
	type?: ProblemJsonCore["type"];
	title?: ProblemJsonCore["title"];
	detail?: ProblemJsonCore["detail"];
	instance?: ProblemJsonCore["instance"];
	context?: {
		[key: string]: any;
	};
};

const hostName =
	(process.env.VERCEL_URL as `https://some-url.com` | undefined) ||
	"http://localhost:3000";

/**
 * Construct a Problem JSON response object
 * This makes the error response compliant with the RFC9457 specification.
 * ---
 * https://datatracker.ietf.org/doc/html/rfc9457
 */
export const constructErrorResponse = ({
	status = 500,
	type = `${hostName}/docs/error-codes/500`,
	title = "Internal Server Error",
	detail = "An unexpected error occurred",
	instance = "/errorHandling/constructErrorResponse",
	context,
}: ConstructErrorResponseParams) => {
	const errorResponse: ProblemJsonCore & {
		context?: {
			[key: string]: any;
		};
	} = {
		status,
		type,
		title,
		detail,
		instance,
		context: context && {
			...context,
		},
	};
	return {
		code: status,
		headers: {
			"Content-Type": "application/problem+json",
		},
		body: errorResponse,
	};
};
