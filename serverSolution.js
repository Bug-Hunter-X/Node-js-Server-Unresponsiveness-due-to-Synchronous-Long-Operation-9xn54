const http = require('http');

const server = http.createServer((req, res) => {
  // Use asynchronous operations or offload the long task
  // Example: using setImmediate to avoid blocking the event loop
  setImmediate(() => {
    let result = 0; // Simulate a long-running task
    for (let i = 0; i < 1000000000; i++) {
      result += i; // Do something
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World! Result:' + result);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});