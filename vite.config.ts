import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ insertTypesEntry: true, tsconfigPath: "tsconfig.app.json" }),
    libCss()
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "./src"),
      // name: "@vetflux-npm/vetflux-design-system",
      fileName: "index",
      formats: ["es", "umd", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      input: {
        main: path.resolve(__dirname, "./src/index.tsx"),
        styles: path.resolve(__dirname, "./src/index.css")
      },
      output: [
        {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "styled-components": "styled"
          },
          assetFileNames: chunkInfo => {
            if (chunkInfo.name?.endsWith(".css")) {
              return "styles.css";
            }
            return chunkInfo.name || "assets/[name].[ext]";
          }
        }
      ]
    },
    sourcemap: true,
    emptyOutDir: true,
    commonjsOptions: {
      esmExternals: ["react"]
    }
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/assets/index.css";` }
    }
  }
});
