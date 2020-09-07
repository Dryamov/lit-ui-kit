import { themes } from '@storybook/theming';
import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { storiesOf, addDecorator } from '@storybook/web-components';
// addDecorator((storyFn, context) => withConsole()(storyFn)(context)); 

// storiesOf('withConsole', module)
//  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
//  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)
//  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)
//  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)
//  .add('with Uncatched Error', () =>
//    <Button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</Button>
//  )

 setConsoleOptions({
  panelExclude: [],
  log: 'console1',
  warn: 'warn2',
  error: 'error3'
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