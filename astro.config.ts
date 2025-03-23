import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Define locales and languages
export const LOCALES = ["en", "ja"] as const;

export type LOCALE = "en" | "ja";

export const LANGS = {
  en: "English",
  ja: "日本語",
} as const;

// Create the Astro config
export default defineConfig({
  site: "https://ossamoon.com",
  integrations: [mdx(), sitemap()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", { path: "ja", codes: ["ja", "ja-JP"] }],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
