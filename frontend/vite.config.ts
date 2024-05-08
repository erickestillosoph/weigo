import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        define: {
            "process.env": env,
        },
        plugins: [react(), reactRefresh()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        css: {
            postcss: "./postcss.config.js",
        },
    };
});
