import type { LOCALE } from "../../astro.config";

export type Multilingual = Record<LOCALE, string>;

export function useTranslations(locale: LOCALE) {
  return function t(multilingual: Multilingual): string {
    return multilingual[locale];
  };
}
