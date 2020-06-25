module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        amd: true,
        jest: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        // '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        "semi": [2, "always"],
        'no-console': "off",
        "indent": ["error", 4],
        // "vue/html-indent": ["error", 4],
        "quote": "off",
        "no-multi-spaces": ["error", { ignoreEOLComments: true }]
    }
};
