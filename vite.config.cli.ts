/// <reference types="vitest" />
import path from "path";
import { defineConfig, LibraryFormats } from "vite";
import packageJson from "./package.json";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileName: Record<string, string> = {
  es: `cli.js`,
};

const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

module.exports = defineConfig({
  base: "./",
  esbuild: {
    target: "node12",
    minifyIdentifiers: false,
  },
  build: {
    minify: "esbuild",
    outDir: "./dist/bin",
    lib: {
      entry: path.resolve(__dirname, "src/cli.ts"),
      name: getPackageNameCamelCase(),
      formats: formats as LibraryFormats[],
      fileName: (format) => fileName[format],
    },
  },
  test: {},
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@@", replacement: path.resolve(__dirname) },
    ],
  },
});
