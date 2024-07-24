import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "protected-route-ayanhasnain",
  },
  external: ["react", "react-dom", "react-router-dom"],
  plugins: [typescript()],
});
