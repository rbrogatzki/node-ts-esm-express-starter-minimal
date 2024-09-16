export default [
    {
        files: ["src/**/*.ts"],
        parser: '@typescript-eslint/parser',
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
        ],
        parserOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        env: {
            es2022: true,
            node: true,
        },
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
        },
    }
];