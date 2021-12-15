module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly'
    },
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        'vue',
        '@typescript-eslint'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'generator-star-spacing': 'off',
        'no-mixed-operators': 0,
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 5,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        'vue/attribute-hyphenation': 0,
        'vue/html-self-closing': 0,
        'vue/component-name-in-template-casing': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/no-unused-components': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/no-use-v-if-with-v-for': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/no-parsing-error': 0,
        'no-tabs': 0,
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        semi: [
            2,
            'never',
            {
                beforeStatementContinuationChars: 'never'
            }
        ],
        'no-delete-var': 2,
        'prefer-const': [
            2,
            {
                ignoreReadBeforeAssign: false
            }
        ],
        'template-curly-spacing': 'off',
        indent: 'off',
        'space-before-function-paren': 'off',
        'vue/html-indent': ['error', 2, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/script-indent': ['error', 2, {
            baseIndent: 1,
            switchCase: 1
        }],
        'no-trailing-spaces': 'off'
    }
}
