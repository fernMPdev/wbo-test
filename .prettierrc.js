module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  overrides: [
    {
      files: ['*.json'],
      options: {
        useTabs: false
      }
    }
  ],
  endOfLine: 'lf'
};