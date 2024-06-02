import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/goit-react-hw-01-components/",
  build: {
    outDir: "./dist",
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  esbuild: {
    loader: 'jsx',
    include: /\.jsx$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      },
    },
  }
});
