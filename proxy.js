const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', (req, res, next) => {
  const targetUrl = decodeURIComponent(req.url.slice(1));
  if (!targetUrl) {
    return res.status(400).send('No target URL provided.');
  }
  createProxyMiddleware({ target: targetUrl, changeOrigin: true })(req, res, next);
});

app.listen(8080, () => {
  console.log('Proxy server is running on port 8080');
});
