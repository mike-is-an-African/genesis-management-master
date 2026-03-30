import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"*.{js,ts,jsx,tsx,mdx}",
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
			fontFamily: {
				sans: ["var(--font-montserrat)"],
				inter: ["var(--font-montserrat)"],
				montserrat: ["var(--font-montserrat)"],
				playfair: ["var(--font-montserrat)"],
			},
			colors: {
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
				// Genesis brand colors
				genesis: {
					"navy": "#0E1E4A", // Navy blue
					"gold": "#F7C430", // Gold/yellow
				},
				// Modern zinc-based color palette
				zinc: {
					"50": "#fafafa",
					"100": "#f4f4f5",
					"200": "#e4e4e7",
					"300": "#d4d4d8",
					"400": "#a1a1aa",
					"500": "#71717a",
					"600": "#52525b",
					"700": "#3f3f46",
					"800": "#27272a",
					"900": "#18181b",
					"950": "#09090b",
				},
				// Accent teal/emerald colors
				teal: {
					"50": "#f0fdfa",
					"100": "#ccfbf1",
					"200": "#99f6e4",
					"300": "#5eead4",
					"400": "#2dd4bf",
					"500": "#14b8a6",
					"600": "#0d9488",
					"700": "#0f766e",
					"800": "#115e59",
					"900": "#134e4a",
					"950": "#042f2e",
				},
				emerald: {
					"50": "#ecfdf5",
					"100": "#d1fae5",
					"200": "#a7f3d0",
					"300": "#6ee7b7",
					"400": "#34d399",
					"500": "#10b981",
					"600": "#059669",
					"700": "#047857",
					"800": "#065f46",
					"900": "#064e3b",
					"950": "#022c22",
				},
				// Add the sky and indigo colors to the extended colors
				sky: {
					"50": "#f0f9ff",
					"100": "#e0f2fe",
					"200": "#bae6fd",
					"300": "#7dd3fc",
					"400": "#38bdf8",
					"500": "#0ea5e9",
					"600": "#0284c7",
					"700": "#0369a1",
					"800": "#075985",
					"900": "#0c4a6e",
					"950": "#082f49",
				},
				indigo: {
					"50": "#eef2ff",
					"100": "#e0e7ff",
					"200": "#c7d2fe",
					"300": "#a5b4fc",
					"400": "#818cf8",
					"500": "#6366f1",
					"600": "#4f46e5",
					"700": "#4338ca",
					"800": "#3730a3",
					"900": "#312e81",
					"950": "#1e1b4b",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				xl: "0.75rem",
				"2xl": "1rem",
			},
			boxShadow: {
				sharp: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
				crisp: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				depth: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
				accent: "0 4px 14px 0 rgba(15, 118, 110, 0.39)",
				"inner-glow": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
				highlight:
					"0 0 0 1px rgba(15, 118, 110, 0.05), 0 1px 3px 0 rgba(15, 118, 110, 0.15)",
				card: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
				"card-hover":
					"0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
				"inset-right": "inset -10px 0 8px -8px rgba(0, 0, 0, 0.05)",
				"inset-left": "inset 10px 0 8px -8px rgba(0, 0, 0, 0.05)",
				// 2025 shadows
				elegant:
					"0 20px 30px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -15px rgba(0, 0, 0, 0.05)",
				glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
				float: "0 30px 60px -15px rgba(0, 0, 0, 0.15)",
				subtle: "0 2px 10px rgba(0, 0, 0, 0.05)",
				premium:
					"0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.07)",
				nyc: "0 40px 80px rgba(0, 0, 0, 0.1)",
				"2025": "0 70px 140px -20px rgba(0, 0, 0, 0.15), 0 50px 100px -30px rgba(0, 0, 0, 0.1), 0 30px 60px -10px rgba(0, 0, 0, 0.05)",
				"ultra-subtle": "0 1px 2px rgba(0, 0, 0, 0.03)",
				"inner-subtle": "inset 0 1px 4px rgba(0, 0, 0, 0.02)",
				"accent-glow": "0 0 15px rgba(20, 184, 166, 0.35)",
				"diagonal": "8px 8px 0px rgba(15, 118, 110, 0.25)",
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
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				"fade-up": {
					from: { opacity: "0", transform: "translateY(20px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"fade-down": {
					from: { opacity: "0", transform: "translateY(-20px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"slide-in-right": {
					from: { transform: "translateX(30px)", opacity: "0" },
					to: { transform: "translateX(0)", opacity: "1" },
				},
				"slide-in-left": {
					from: { transform: "translateX(-30px)", opacity: "0" },
					to: { transform: "translateX(0)", opacity: "1" },
				},
				"pulse-subtle": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-15px)" },
				},
				"float-slow": {
					"0%, 100%": { transform: "translateY(0) rotate(0deg)" },
					"50%": { transform: "translateY(-20px) rotate(2deg)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" },
				},
				"text-shimmer": {
					"0%": { backgroundPosition: "0% 50%" },
					"100%": { backgroundPosition: "100% 50%" },
				},
				"rotate-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"scale-pulse": {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" }
				},
				"clip-path-reveal": {
					"0%": { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
					"100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.7s ease-out",
				"fade-up": "fade-up 0.7s ease-out",
				"fade-down": "fade-down 0.7s ease-out",
				"slide-in-right": "slide-in-right 0.7s ease-out",
				"slide-in-left": "slide-in-left 0.7s ease-out",
				"pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
				float: "float 6s ease-in-out infinite",
				"float-slow": "float-slow 10s ease-in-out infinite",
				shimmer: "shimmer 2s linear infinite",
				"text-shimmer": "text-shimmer 3s ease infinite",
				"rotate-slow": "rotate-slow 20s linear infinite",
				"scale-pulse": "scale-pulse 8s ease-in-out infinite",
				"clip-path-reveal": "clip-path-reveal 1.2s cubic-bezier(0.77, 0, 0.18, 1) forwards"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-subtle": "linear-gradient(to right, var(--tw-gradient-stops))",
				"gradient-angular": "conic-gradient(var(--tw-gradient-stops))",
				"gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
				"gradient-zinc": "linear-gradient(to right, rgb(244, 244, 245), rgb(228, 228, 231))",
				"gradient-zinc-dark": "linear-gradient(to right, rgb(39, 39, 42), rgb(24, 24, 27))",
				"gradient-teal": "linear-gradient(135deg, rgb(15, 118, 110), rgb(13, 148, 136))",
				"gradient-emerald": "linear-gradient(to right, rgb(5, 150, 105), rgb(4, 120, 87))",
				"gradient-diagonal": "linear-gradient(135deg, var(--tw-gradient-stops))",
				noise: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')",
				"mesh-gradients": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIG9wYWNpdHk9IjAuMDUiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDAyIiBudW1PY3RhdmVzPSIzIiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjEwIiBzcGVjdWxhckNvbnN0YW50PSIwLjciIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzM5OTdmNSIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgICAgPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogIDwvZmVTcGVjdWxhckxpZ2h0aW5nPgogIAo8L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9IiMxMGI5ODEiIGZpbHRlcj0idXJsKCNubm5vaXNlLWZpbHRlcikiPjwvcmVjdD48L3N2Zz4=')",
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
				"in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
			},
			transitionDuration: {
				"2000": "2000ms",
				"3000": "3000ms",
				"4000": "4000ms",
			},
			clipPath: {
				diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
				ribbon: "polygon(0 0, 100% 0, 100% 86%, 0 64%)",
				diagonal: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
			},
			backgroundSize: {
				'300%': '300%',
				'400%': '400%',
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
