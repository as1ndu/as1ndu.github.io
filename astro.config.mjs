import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://asindu.xyz",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
  },
});
