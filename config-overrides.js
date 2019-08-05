const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const themeConfig = require('./src/configs/theme');

/* eslint-disable */
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': themeConfig.palette.primaryColor,
    },
  })
);
