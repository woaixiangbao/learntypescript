import * as http from 'http';
const server = http.createServer(function(req, res) {
  res.end('Hello, world');
});
server.listen(3000, function() {
  console.log('server is listening');
});
