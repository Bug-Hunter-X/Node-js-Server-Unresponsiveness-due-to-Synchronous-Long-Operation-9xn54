# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in a request handler can cause the server to become unresponsive.

## Bug
The `server.js` file contains a simple HTTP server with a request handler that includes a very long loop.  This loop blocks the event loop, preventing the server from handling new requests until the loop completes.  This results in the server hanging and becoming unresponsive.

## Solution
The `serverSolution.js` file demonstrates how to resolve the issue by using asynchronous operations or offloading the long-running task to a worker thread or different process.