import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/static/",
  publicDir: "./static",
  server: {
    host: "127.0.0.1",
  },
  build: {
    outDir: resolve("./build/"),
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve("./frontend/main.jsx"),
      },
    },
  },
});
