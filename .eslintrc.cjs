module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "airbnb",
        "airbnb-typescript",
        "prettier",
        "plugin:react/jsx-runtime"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'simple-import-sort',
        'unused-imports'
    ],
    "rules": {
        'import/no-default-export': 'error',
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "import/prefer-default-export": "off",
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^react.*', '^[a-zA-Z].*'],
                    ['^@(.*|$)'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    ['^.+\\.json$'],
                    ['^.+\\.s?css$'],
                ],
            },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
            }
        ],
        "import/no-extraneous-dependencies": ["off"],
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        ],
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/no-inferrable-types": ['error', {
            ignoreParameters: true
        }],
        "react/require-default-props": 'off',
        "jsx-a11y/anchor-is-valid": 'off',
        "react/prop-types": "off",
        "consistent-return": "off",
        "react/no-array-index-key": "off",
        "no-plusplus": "off",
        "no-restricted-syntax": 0,
        "no-param-reassign": "off",
        "no-console": "off",
        "no-underscore-dangle": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "eqeqeq": "off",
        "react/jsx-no-bind": "off",
        "@typescript-eslint/no-shadow": "off",
        "react/display-name": "off"
    },
    overrides: [
        {
            files: ['src/app/**'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
}
