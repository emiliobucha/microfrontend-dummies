const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  console.log(singleSpaWebpackConfig);
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}