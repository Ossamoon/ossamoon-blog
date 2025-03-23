// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Default language
export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

// Site data for each language
export const SITE_DATA: Record<Locale, { title: string; description: string }> =
  {
    en: {
      title: "Ossamoon Blog",
      description: "Welcome to Ossamoon blog!",
    },
    ja: {
      title: "おっさむーんブログ",
      description: "おっさむーんブログへようこそ！",
    },
  };

// For backward compatibility
export const SITE_TITLE = SITE_DATA[DEFAULT_LOCALE].title;
export const SITE_DESCRIPTION = SITE_DATA[DEFAULT_LOCALE].description;
