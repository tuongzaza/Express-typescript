import i18n from 'i18n';
import path from 'path';

i18n.configure({
  locales: ['en', 'vi'],
  directory: path.join(__dirname, './locales'),
  defaultLocale: 'en',
  autoReload: true,
  updateFiles: false,
  syncFiles: false,
  cookie: 'i18n'
});

export default i18n;
