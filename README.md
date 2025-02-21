# Node.js Assignment

## Task 1: Hello World Program

- **File**: `hello-world.js`
- **Description**: A simple program that prints "HELLO WORLD" to the console.

```javascript
console.log("HELLO WORLD");
## Task 2: HTTP Server

- **File**: `server.js`
- **Description**: A Node.js HTTP server that listens on port 3000 and responds with `<h1>Hello Node!!!!</h1>` when accessed at `http://localhost:3000`.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
