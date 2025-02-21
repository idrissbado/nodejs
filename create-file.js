// create-file.js
const fs = require('fs');

// Write to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('welcome.txt has been saved!');
});

// Read from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);  // Output: Hello Node
});
