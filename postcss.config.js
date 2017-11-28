module.exports = () => ({
  plugins: {
    'stylelint': {
      "extends": "stylelint-config-standard",
      "rules": {
        "max-empty-lines": 2
      }
    },
    'postcss-cssnext': {},
    'cssnano': {}
  }
});
