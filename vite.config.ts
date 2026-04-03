import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const EXAMPLE = process.env.EXAMPLE;

export default defineConfig({
  plugins: [nodePolyfills()],
  root: "./",
  build: {
    emptyOutDir: false,
    outDir: "./",
    rollupOptions: {
      input: {
        main: "./src/hotwallet/index.ts",
      },
      output: {
        entryFileNames: "hotwallet.js",
        assetFileNames: "hotwallet.js",
        format: "iife",
      },
    },
  },
});
