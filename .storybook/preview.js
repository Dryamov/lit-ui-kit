import { themes } from '@storybook/theming';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { storiesOf } from '@storybook/web-components';

setConsoleOptions({
  panelExclude: [/\[HMR\]/],
  log: '📜 Log',
  warn: '⚠️ Warning',
  error: '❌ Error'
});
export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: '#ffffff'
      },
      {
        name: 'dark',
        value: '#333333'
      },
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.light,
  },
}
const req = require.context('../src', true, /\.stories\.(js|jsx|ts|tsx)$/);
storiesOf(req, module)
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}