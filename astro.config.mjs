import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import inoxToolsStarWarp from "@inox-tools/star-warp";
import sentry from "@sentry/astro";
import { defineConfig } from "astro/config";

import rehypeMermaid from "rehype-mermaid";
import starlightLinksValidator from "starlight-links-validator";
import { loadEnv } from "vite";

// See https://docs.astro.build/en/guides/configuring-astro/#environment-variables.
const { SENTRY_AUTH_TOKEN } = loadEnv(
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV ?? "development",
  // eslint-disable-next-line no-undef
  process.cwd(),
  "",
);

const sidebar = [
  {
    label: "Guides",
    items: [
      {
        label: "Getting Started",
        slug: "guides/getting-started",
        badge: { text: "In Progress", variant: "caution" },
      },
      {
        label: "Account Management",
        items: [
          {
            label: "Deleting Your Account",
            slug: "guides/deleting-your-account",
          },
          {
            label: "Restoring Your Account",
            slug: "guides/restoring-your-account",
          },
        ],
      },
    ],
  },
  {
    label: "Concepts",
    items: [
      { label: "Users", slug: "concepts/users" },
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
      editLink: {
        baseUrl: "https://github.com/wattmaven/docs/edit/main/",
      },
      social: {
        github: "https://github.com/wattmaven",
      },
      lastUpdated: true,
      pagination: false,
      customCss: ["./src/tailwind.css"],
      sidebar,
      plugins: [starlightLinksValidator()],
      // See https://starlight.astro.build/reference/configuration/#head.
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cdn.usefathom.com/script.js",
            "data-site": "MHITWYLQ",
            defer: true,
          },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles.
      applyBaseStyles: false,
    }),
    inoxToolsStarWarp(),
    sentry({
      dsn: "https://22ce9feb5e26bdc9ebffe367ed206a1b@o4508094123278336.ingest.us.sentry.io/4508185879969792",
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
