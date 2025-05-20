import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';
import fg from 'fast-glob';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const __dirname = path.resolve();
const entries = fg
  .sync('src/**/index.ts?(x)', {
    ignore: ['src/**/__tests__/**', 'src/**/stories/**']
  })
  .reduce(
    (acc, file) => {
      const name = file.replace(/^src\//, '').replace(/\/index\.tsx?$/, '');
      acc[name || 'index'] = path.resolve(__dirname, file);
      return acc;
    },
    {} as Record<string, string>
  );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: true, // 서버/클라이언트 일관성
              displayName: true, // 디버깅용 displayName
              fileName: false // 파일 경로 해시 제거
            }
          ]
        ]
      }
    }),
    viteStaticCopy({
      targets: [
        { src: 'src/theme/styles.css', dest: '.' }
      ]
    }),
    tsconfigPaths(),
    dts({ insertTypesEntry: true, tsconfigPath: 'tsconfig.app.json' }),
    libCss(),
    dts({
      entryRoot: 'src',
      root: 'src',
      outDir: 'dist',
      insertTypesEntry: true
    })
  ],
  build: {
    cssCodeSplit: true,
    outDir: 'dist',
    lib: {
      entry: entries,
      name: 'DesignSystem',
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      // input: {
      //   main: path.resolve(__dirname, './src/index.tsx'),
      //   styles: path.resolve(__dirname, './src/index.css')
      // },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        },
        assetFileNames: 'styles.css'
      }
      // output: [
      //   {
      //     globals: {
      //       react: 'React',
      //       'react-dom': 'ReactDOM',
      //       'styled-components': 'styled'
      //     },
      //     assetFileNames: (chunkInfo) => {
      //       if (chunkInfo.name?.endsWith('.css')) {
      //         return 'styles.css';
      //       }
      //       return chunkInfo.name || 'assets/[name].[ext]';
      //     }
      //   },
      //   { preserveModules: true, preserveModulesRoot: 'src', dir: 'dist' }
      // ]
    },
    sourcemap: true,
    emptyOutDir: true,
    commonjsOptions: {
      esmExternals: ['react']
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/index.css";`
      }
    }
  }
});
