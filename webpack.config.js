const path = require('path');
const { getDefaultWebpackConfig } = require('@abcnews/aunty');

module.exports = [(() => {
  let config = getDefaultWebpackConfig();

  // Add babel because it disappeared (https://github.com/abcnews/aunty/issues/47)
  const jsRule = config.module.rules.find(rule => String(rule.test).includes('.js'));
  jsRule.options.presets.push(path.join(__dirname, 'node_modules/babel-preset-react/lib/index.js'));

  // Externalize React.
  config.externals = {
    'react': 'React',
    'react-dom': 'ReactDOM',
  };

  return config;
})()];
