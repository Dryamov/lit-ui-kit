import { themes } from '@storybook/theming';
import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';


setConsoleOptions({
  panelExclude: [],
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