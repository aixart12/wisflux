const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://172.18.0.3:8080/',
      secure: false,
      changeOrigin: true    
    })
  );
};