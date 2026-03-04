import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
base: mode === "production"
  ? "/tilak.dev/"
  : "/",

  server: {
    host: true,
    port: 8080,
    strictPort: true,
    allowedHosts: true, // ✅ THIS is the key fix
    hmr: {
      clientPort: 443, // important for ngrok https
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));