import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import en from '../i18n/en.json';
import he from '../i18n/he.json';

const resources = { en, he };

export default function useTranslation() {
  const { language } = useContext(LanguageContext);
  const translations = resources[language] || {};

  function t(key) {
    return translations[key] || key;
  }

  return t;
}
