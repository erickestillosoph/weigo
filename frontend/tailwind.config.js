import { flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { blackA, mauve, violet, indigo, purple } from "@radix-ui/colors";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

// eslint-disable-next-line no-undef
module.exports = {
    mode: "jit",
    darkMode: ["class"],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    content: [
        "*",
        "./index.html",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./App.tsx",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                ...blackA,
                ...mauve,
                ...violet,
                ...purple,
                ...indigo,
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                enterFromRight: {
                    from: { opacity: "0", transform: "translateX(200px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                enterFromLeft: {
                    from: { opacity: "0", transform: "translateX(-200px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                exitToRight: {
                    from: { opacity: "1", transform: "translateX(0)" },
                    to: { opacity: "0", transform: "translateX(200px)" },
                },
                exitToLeft: {
                    from: { opacity: "1", transform: "translateX(0)" },
                    to: { opacity: "0", transform: "translateX(-200px)" },
                },
                scaleIn: {
                    from: {
                        opacity: "0",
                        transform: "rotateX(-10deg) scale(0.9)",
                    },
                    to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
                },
                scaleOut: {
                    from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
                    to: {
                        opacity: "0",
                        transform: "rotateX(-10deg) scale(0.95)",
                    },
                },
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                fadeOut: {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                scaleIn: "scaleIn 200ms ease",
                scaleOut: "scaleOut 200ms ease",
                fadeIn: "fadeIn 200ms ease",
                fadeOut: "fadeOut 200ms ease",
                enterFromLeft: "enterFromLeft 250ms ease",
                enterFromRight: "enterFromRight 250ms ease",
                exitToLeft: "exitToLeft 250ms ease",
                exitToRight: "exitToRight 250ms ease",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
        },
    },

    plugins: [
        autoprefixer,
        { tailwindcss },
        { addVariablesForColors },
        // eslint-disable-next-line no-undef
        require("tailwindcss-animate"),
        plugin(({ matchUtilities }) => {
            matchUtilities({
                perspective: (value) => ({
                    perspective: value,
                }),
            });
        }),
    ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}
