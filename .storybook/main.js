module.exports = {
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'none'
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    '@storybook/addon-actions',
  ]
}