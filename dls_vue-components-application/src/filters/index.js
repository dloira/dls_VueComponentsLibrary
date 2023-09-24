import i18n from '../i18n/translations.json';

export function translate(key) {
  return i18n[navigator.language][key];
}

export function truncateWords(str, count) {
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ")
}
