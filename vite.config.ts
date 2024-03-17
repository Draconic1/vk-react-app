import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src", "app"),
      "@pages": resolve(__dirname, "src", "pages"),
      "@layouts": resolve(__dirname, "src", "layouts"),
      "@widgets": resolve(__dirname, "src", "widgets"),
      "@features": resolve(__dirname, "src", "features"),
      "@entities": resolve(__dirname, "src", "entities"),
      "@api": resolve(__dirname, "src", "api"),
      "@shared": resolve(__dirname, "src", "shared"),
    },
  },
});
