import type { RequestEvent } from "@sveltejs/kit";
import octo from '$src/octo';

export async function get(event: RequestEvent) {
  const response = await octo.request("GET /users/below-1/repos")
  return {
    body: {
      ...response
    }
  }
}