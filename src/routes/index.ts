import type { RequestEvent } from "@sveltejs/kit";
// import octo from '$src/octo';
import * as PortfolioService from '$src/services/portfolio';

export async function get(event: RequestEvent) {
  // const response = await octo.request("GET /users/below-1/repos", {
  //   per_page: 5,
  //   page: 1,
  //   sort: 'updated',
  //   direction: 'desc'
  // })
  // const top_repositories = response.data;
  const portfolios = await PortfolioService.search('', 3);
  console.log(portfolios);
  return {
    body: {
      portfolios
    }
  }
}