import { enMessages } from '~/i18n/en';
import { ruMessages } from '~/i18n/ru';
import { I18N_LOCALE } from '~/i18n/i18n.types';

export default defineI18nConfig((nuxt) => ({
  legacy: false,
  locale: I18N_LOCALE.EN,
  messages: {
    en: enMessages,
    ru: ruMessages,
  },
}));
