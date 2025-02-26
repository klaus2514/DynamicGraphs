import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/DynamicGraphs/", // 👈 Use your exact repository name!
});
