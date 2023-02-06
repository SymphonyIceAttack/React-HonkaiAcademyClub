import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        plugins: [
            Unocss({
                presets: [
                    presetAttributify({
                        /* preset options */
                    }),
                    presetUno(),
                    // ...custom presets
                ],
            }),
            react(),
        ],
        server: {
            host: "0.0.0.0",
            proxy: {
                "/api": {
                    target: "http://localhost:3000",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
    });
};
