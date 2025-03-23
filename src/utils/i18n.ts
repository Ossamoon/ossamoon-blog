import { DEFAULT_LOCALE, LOCALES, type Locale } from "../consts";

/**
 * Get the locale from the URL pathname
 */
export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && LOCALES.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }

  return DEFAULT_LOCALE;
}

/**
 * Get the URL for the same page in a different locale
 */
export function getLocalizedUrl(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = getLocaleFromUrl(pathname);

  // If the URL already has a locale, replace it
  if (currentLocale !== DEFAULT_LOCALE) {
    segments[0] = locale;
    return "/" + segments.join("/");
  }

  // If the URL doesn't have a locale and the target locale is the default, return the pathname
  if (locale === DEFAULT_LOCALE) {
    return pathname;
  }

  // Otherwise, add the locale to the beginning
  return "/" + locale + pathname;
}

/**
 * Get the URL without the locale prefix
 */
export function removeLocaleFromUrl(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = getLocaleFromUrl(pathname);

  if (currentLocale !== DEFAULT_LOCALE) {
    segments.shift();
    return "/" + segments.join("/");
  }

  return pathname;
}
