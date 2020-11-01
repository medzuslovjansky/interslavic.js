module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        // workspace packages
        'gsheets-flavorization',
        'odometer',
        'presets',
        'steen-utils',
        '*',
      ],
    ],
  },
}
