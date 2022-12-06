// @ts-check
import { defineConfig } from "astro/config";
import { defineAstro } from "qgp";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";
import { common } from "./qgp.config.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: defineAstro(common, {}),
});
