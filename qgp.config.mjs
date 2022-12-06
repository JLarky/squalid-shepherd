// @ts-check
import react from "@vitejs/plugin-react";
import { defineCommon, defineVite } from "qgp";

export const common = defineCommon({ vite: {} });

export default defineVite(common, {
  plugins: [react()],
  cacheDir: "node_modules/.qgp",
});
