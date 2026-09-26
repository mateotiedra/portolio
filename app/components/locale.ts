export type Locale = 'en' | 'fr'

const STORAGE_KEY = 'portfolio-language'

export function preferredLocale(languages: readonly string[]): Locale {
  return languages[0]?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    // Storage can be unavailable in private browsing.
  }
  return preferredLocale(navigator.languages?.length ? navigator.languages : [navigator.language])
}

export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // The current page still switches language when storage is unavailable.
  }
}
