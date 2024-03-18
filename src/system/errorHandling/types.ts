type ProblemJsonStatus = number;
type ProblemJsonTypeUrl = `${`${"http://" | "https://"}`}${string}`;
type ProblemJsonTitle = string;
type ProblemJsonDescription = string;
type ProblemJsonInstancePath = `/${string}`;

/**
 * Type of Problem JSON response object
 * This makes the error response compliant with the RFC9457 specification.
 * ---
 * https://datatracker.ietf.org/doc/html/rfc9457
 */
export type ProblemJsonCore = {
	status: ProblemJsonStatus;
	type: ProblemJsonTypeUrl;
	title: ProblemJsonTitle;
	detail: ProblemJsonDescription;
	instance: ProblemJsonInstancePath;
};
