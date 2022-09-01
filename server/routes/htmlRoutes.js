const path = require('path');

// Uses PATH to allow HTML to be served up by the server
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};