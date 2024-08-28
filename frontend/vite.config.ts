import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const API_URL = `${env.VITE_API_URL ?? "http://localhost:8000"}`;
    const PORT = Number(env.VITE_PORT ?? 5174);

    return {
        define: {
            "process.env": env,
        },
        server: {
            proxy: {
                "/app": API_URL,
            },
            port: PORT,
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
