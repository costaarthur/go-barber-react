const { addbabelPlugin, override } = require('customize-cra');

module.exports = override(
  addbabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
