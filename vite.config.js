const path = require('path');
const port = 3000;

module.exports = {
  port,
  alias: {
    '@/': path.join(__dirname, 'src'),
  },
  proxy: {
    '/api': {
      target: 'http://example.com',
    },
  },
};
