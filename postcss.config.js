module.exports = () => ({
  plugins: {
    'stylelint': {
      "extends": "stylelint-config-standard",
      "rules": {
        "max-empty-lines": 2
      }
    },
    'precss': {},
    'postcss-cssnext': {},
    'postcss-responsive-type': {}
  }
})
