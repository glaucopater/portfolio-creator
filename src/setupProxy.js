const proxy = require('http-proxy-middleware');
const API_URL = 'https://polls.apiblueprint.org/';

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: API_URL,
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: false,
    }),
  );
};
