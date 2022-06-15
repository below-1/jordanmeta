import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
    vite: {
      resolve: {
        alias: {
          $src: resolve('./src')
        }
      }
    }
  },
};

export default config;
