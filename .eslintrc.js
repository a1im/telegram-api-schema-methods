module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.ts',
                    '.tsx',
                ],
            },
        },
    },
    rules: {
        'no-param-reassign': [2, { props: false }],
        indent: [2, 4, {
            SwitchCase: 1,
        }],
        'no-use-before-define': 0,
        'linebreak-style': [2],
        radix: ['error', 'as-needed'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: '*', next: ['try'] },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'import/prefer-default-export': 0,
        'prefer-template': 1,
        'max-len': 0,
        'max-classes-per-file': 0,
        'import/no-unresolved': 'error',
        'import/extensions': ['error', 'ignorePackages', {
            ts: 'never',
            tsx: 'never',
        }],
        'consistent-return': 'off',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
        }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'none',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
            multilineDetection: 'brackets',
        }],
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['interface', 'type'],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var', 'type'],
                next: ['const', 'let', 'var', 'type'],
            },
        ],
        '@typescript-eslint/space-infix-ops': ['error', {
            int32Hint: false,
        }],
        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: false,
            after: true,
            overrides: {
                arrow: {
                    before: true,
                    after: true,
                },
            },
        }],
    },
};
