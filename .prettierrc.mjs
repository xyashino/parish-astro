/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  semi: false,
  arrowParens: 'avoid',
  trailingComma: 'none',
  singleQuote: true,
  endOfLine: 'lf',
  bracketSpacing: true,
  printWidth: 80,
  useTabs: false,
  quoteProps: 'as-needed',
  tabWidth: 2
}
