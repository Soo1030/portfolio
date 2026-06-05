import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // CRUCIAL: Replace 'your-repository-name' with your exact GitHub repo name
  base: "/your-repository-name/", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
