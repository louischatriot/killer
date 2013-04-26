var http = require('http')
  , exec = require('child_process').exec
  , server;


server = http.createServer(function (req, res) {
  console.log("Received a request");
  exec('pkill -9 ioquake3', function (err, stdout, stderr) {
    console.log('-- DONE --');
    console.log(stdout);
    console.log("===");
    console.log(stderr);
  });
  res.writeHead(200);
  res.end("TEST", 'utf8');
});

console.log("Started server on port 6767");
server.listen(6767);
