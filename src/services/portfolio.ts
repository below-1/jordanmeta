import type { Portfolio } from '$src/types';
import portfolios_json from '$src/portfolios.json';

const data: Portfolio[] = portfolios_json;

export async function search(keyword: string, limit: number) {
  const filtered = data
    .filter(item => item.title.includes(keyword))
    .slice(0, limit)
  return {
    items: filtered
  }
}
