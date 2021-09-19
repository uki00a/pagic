import i18next from 'https://esm.sh/i18next@19.8.1/esnext/i18next.js';
import { Trans } from 'https://esm.sh/react-i18next@11.7.3/Trans.js';

import pagicConfig from './pagic.config.js';

(async () => {
  await i18next.init(
    {
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      // https://stackoverflow.com/a/44799437/2777142
      keySeparator: false,
      ...pagicConfig.i18n,
    },
    () => {},
  );
})();

window.t = (input) => {
  i18next.changeLanguage(window.pageProps.language.code, () => {});
  return i18next.t(input);
};

window.Trans = (props) => {
  i18next.changeLanguage(window.pageProps.language.code, () => {});
  return window.React.createElement(Trans, {
    i18n: i18next,
    ...props,
  });
};
