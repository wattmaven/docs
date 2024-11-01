/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
	// @ts-ignore
	test: {
		include: ["**/*.unit.test.{ts,tsx}"],
		environment: "jsdom",
	},
});
