const http = require('http');
const fs = require('fs');  // Require the filesystem module

const server = http.createServer((req, res) => {
    // Read the index.html file
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            // If there's an error reading the file, send an error response
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error: Unable to load the HTML file');
            return;
        }

        // Send the HTML content as the response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);  // Send the content of the index.html file
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
