import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import inoxToolsStarWarp from "@inox-tools/star-warp";
import sentry from "@sentry/astro";
import { defineConfig } from "astro/config";

import rehypeMermaid from "rehype-mermaid";
import starlightLinksValidator from "starlight-links-validator";
import { loadEnv } from "vite";

// See https://docs.astro.build/en/guides/configuring-astro/#environment-variables.
const { SENTRY_DSN, SENTRY_AUTH_TOKEN } = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

const sidebar = [
	{
		label: "Concepts",
		items: [
			{ label: "Teams", slug: "concepts/teams" },
			{ label: "Projects", slug: "concepts/projects" },
		],
	},
	// A link to the console.
	{ label: "Console", link: "https://console.wattmaven.com" },
];

// https://astro.build/config
export default defineConfig({
	site: "https://docs.wattmaven.com",
	integrations: [
		starlight({
			title: "wattmaven",
			social: {
				github: "https://github.com/wattmaven",
			},
			lastUpdated: true,
			pagination: false,
			customCss: ["./src/tailwind.css"],
			sidebar,
			plugins: [starlightLinksValidator()],
		}),
		tailwind({
			// Disable the default base styles.
			applyBaseStyles: false,
		}),
		inoxToolsStarWarp(),
		sentry({
			dsn: SENTRY_DSN,
			sourceMapsUploadOptions: {
				project: "docs",
				authToken: SENTRY_AUTH_TOKEN,
			},
		}),
	],
	markdown: {
		rehypePlugins: [rehypeMermaid],
	},
});
