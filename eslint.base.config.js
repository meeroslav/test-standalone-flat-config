const nxEslintPlugin = require('@nx/eslint-plugin');

module.exports = [
  { plugins: { '@nx': nxEslintPlugin } },
  { settings: { sharedData: 'Hello' } },
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    extends: ['plugin:@nx/typescript'],
    rules: {},
  },
  {
    files: ['*.js', '*.jsx'],
    extends: ['plugin:@nx/javascript'],
    rules: {},
  },
  { ignores: ['node_modules'] },
];
