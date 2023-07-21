import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federationPlugin from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federationPlugin({
      remotes: {
        lib_app: "http://localhost:6001/assets/remoteProvider.js"
      },
      shared: ["vue"]
    })
  ],
  server: {
    port: 5001
  },
  // 打包配置
  build: {
    target: "esnext",
    minify: false
  }
})
