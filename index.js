var http = require('http')
  , exec = require('child_process').exec
  , server;


server = http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') { return res.end(); }

  console.log("Received a request");

  if (req.url === '/listprocesses') {
    exec('ps -ef', function (err, stdout, stderr) {
      res.write(stdout, 'utf8');
      res.end();
    });
  } else {
    exec('pkill -9 ioquake3', function (err, stdout, stderr) {
      console.log('-- DONE --');
      console.log(stdout);
      console.log("==========================");
      console.log(stderr);
    });
    res.writeHead(200);
    res.end("Killed OpenArena", 'utf8');
  }
});


console.log("Started server on port 6767");
server.listen(6767);
