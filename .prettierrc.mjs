// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'es5',
    printWidth: 160,
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'lf',
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
        {
            files: '*.vue',
            options: {
                parser: 'vue',
            },
        },
    ],
};
